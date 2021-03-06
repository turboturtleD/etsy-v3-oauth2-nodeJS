const CryptoJS = require('crypto-js')           // https://www.npmjs.com/package/crypto-js
const { v4: uuidv4 } = require('uuid')          // https://www.npmjs.com/package/uuid
const Str = require('@supercharge/strings')     // https://www.npmjs.com/package/@supercharge/strings
const request = require('request')              // https://www.npmjs.com/package/request
const { openapi } = require('./openapi')        // https://github.com/etsy/open-api/blob/88a151bdd934ac6c70bad25d922b60be25e36cef/openapi.json
const { client_id, salt, scopes, redirect_uri } = require('./etsyAuth.config')

class EtsyClient {
    constructor(){}

    buildConsentUrl() {
        const baseURL = 'https://www.etsy.com/oauth/connect?'
        const uuid_state = uuidv4()
        const hashed_state = CryptoJS.HmacSHA256(uuid_state, salt)
        const state = CryptoJS.enc.Hex.stringify(hashed_state)
        const preimage_code_challenge = Str.random(32)
        const parsed_preimage = CryptoJS.enc.Utf8.parse(preimage_code_challenge)
        const base64_preimage = CryptoJS.enc.Base64.stringify(parsed_preimage)
        const hashed_code_challenge = CryptoJS.SHA256(base64_preimage)
        const code_challenge = CryptoJS.enc.Base64.stringify(hashed_code_challenge).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
        const code_challenge_method = 'S256'
        const authURL = baseURL + 'response_type=code&client_id=' + client_id + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&scope=' + encodeURIComponent(scopes) + '&state=' + state + '&code_challenge=' + code_challenge + '&code_challenge_method=' + code_challenge_method
        const authClient = {
            state : state,
            authURL : authURL,
            base64_preimage : base64_preimage
        }
        return authClient
    }

    initializeTenant() {
        const authClient = this.buildConsentUrl()
        const tenant = {
            clientId : client_id,
            consentUrl : authClient.authURL,
            state : authClient.state,
            preimage : authClient.base64_preimage,
            redirect_uri : redirect_uri
        }
        return tenant
    }

    static enhanceToken(token){
        const access_token_expires_in = token.expires_in*1000
        const refresh_token_valid_days = 90
        const refresh_token_expires_in = refresh_token_valid_days*(24*60*60*1000)
        token.access_token_expires = new Date()*1 + access_token_expires_in
        token.refresh_token_expires = new Date()*1 + refresh_token_expires_in
        token.user_id = token.access_token.split('.')[0]
        return token
    }

    static getAccessToken (tokenRequest) {
        return new Promise((resolve, reject) => {
            tokenRequest.grant_type = 'authorization_code'
            tokenRequest.client_id = client_id
            tokenRequest.redirect_uri = redirect_uri
            request({
                method : 'POST',
                uri : 'https://api.etsy.com/v3/public/oauth/token',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body : encodeBody(tokenRequest),
            }, (error, response, body) => {
                if (error) reject(error)
                if (error) console.log(error)
                if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve({ response: response, body: body });
                }
                else {
                    reject({ response: response, body: body });
                }
            })
        })
    }

    static refresh(token){
        return new Promise(async (resolve,reject) => {
            try{
                const currentTime = new Date()*1
                if(currentTime < token.access_token_expires){  //token does not need to be refreshed
                    resolve(token)
                }
                else{
                    if(currentTime >= token.refresh_token_expires)throw new Error('refresh token expired, re-athentication required')
                    if(currentTime >= token.access_token_expires){              //token is expired, but refresh token has not
                        let result = await requestRefresh(token)  //retrieve new access token using refresh token
                        const refreshed_token = JSON.parse(result.body)         //parse server response
                        const enhanced_token = EtsyClient.enhanceToken(refreshed_token)    //add additional helpful data to token for later use
                        resolve(enhanced_token)                                 //return refreshed token
                    }
                    else {
                        throw new Error('unknown token evaluation error')
                    }
                }
            }
            catch(e){
                console.log(e)
                reject(e)
            }
        })
        
    }

    static request(endpoint,parameters,token,requestBody){
        return new Promise (async (resolve,reject) => {
            try{
                let access_token
                if(token != null && token != undefined && token != '') {
                    let refreshed_token = await EtsyClient.refresh(token)
                    access_token = refreshed_token.access_token
                }
                const resourceRequest = new OpenAPIRequest(endpoint,parameters)
                let headers = {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'x-api-key' : client_id,
                }
                if(resourceRequest.contentType != undefined)headers['Content-Type'] = resourceRequest.contentType
                if (access_token != null && access_token != undefined) headers['authorization'] = 'Bearer ' + access_token
                let body = null
                let formData = null
                if (requestBody != null && requestBody != undefined){ 
                    formData = requestBody
                }
                else if ( resourceRequest.requestBody.requestLength > 0 ){
                    delete resourceRequest.requestBody.requestLength
                    body = encodeBody(resourceRequest.requestBody)
                }
                request({
                    method: resourceRequest.method,
                    uri : openapi.servers[0].url + resourceRequest.path,
                    headers : headers,
                    formData: formData,
                    body: body,
                    }, (error, response, body) => {
                        if (error) reject(error)
                        if (error) console.log('etsyAuth request error',error)
                        console.log('response.statusCode',response.statusCode)
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            console.log('resolve')
                            resolve({ response: response, body: body })
                            console.log(response)
                        }
                        else {
                            reject({ response: response, body: body })
                            console.log(response,'etsyAuth request reject')
                            
                        }
                    }
                )
            }
            catch(e){
                reject(e)
            }
            
        })
    }
}

class OpenAPI {
    constructor(endpoint){
        this.operationId = endpoint
        const endpointer = this.endpointer()
        this.epdata = endpointer
        this.method = endpointer.method
        this.path = endpointer.path
        this.description = endpointer.description
        this.parameters = endpointer.parameters
        this.contentType = endpointer.contentType
    }

    endpointer () {
        const allPaths = Object.keys(openapi.paths)
        let endpoint

        allPaths.forEach(path => {
            if (openapi.paths[path].get != undefined){
                if (openapi.paths[path].get.operationId == this.operationId){
                    endpoint = buildEndpoint(path,'GET')
                    return
                }
            }
            if (openapi.paths[path].delete != undefined){
                if (openapi.paths[path].delete.operationId == this.operationId){
                    endpoint = buildEndpoint(path,'DELETE')
                    return
                }
            }
            if (openapi.paths[path].put != undefined){
                if (openapi.paths[path].put.operationId == this.operationId){
                    endpoint = buildEndpoint(path,'PUT')
                    return
                }
            }
            if (openapi.paths[path].post != undefined){
                if (openapi.paths[path].post.operationId == this.operationId){
                    endpoint = buildEndpoint(path,'POST')
                    return
                }
            }
        })

        function buildEndpoint(path,method){
            const basepath = openapi.paths[path][method.toLowerCase()]
            const endpoint = {
                path : path,
                method : method,
                description : basepath.description,
                parameters : basepath.parameters,
                requestBody : basepath.requestBody,
                responses : basepath.responses,
                security : basepath.security,
                tags : basepath.tags
            }
            if(endpoint.requestBody != undefined){
                let contentType = Object.keys(endpoint.requestBody.content)[0]
                endpoint.contentType = contentType
            }
            return endpoint
        }
        return endpoint
    }
}

class OpenAPIRequest {
    constructor(endpoint,params){
        this.apiobject = new OpenAPI(endpoint)
        this.method = this.apiobject.method
        this.requestBody = { requestLength : 0 }
        this.path = this.pathmaker(params)
        this.params = params
        this.contentType = this.apiobject.contentType
        
    }

    pathmaker (params) {
        if(params != undefined && params != null && params != ''){
            let inPath = this.apiobject.path
            let queryThread = '?'
            let requestBody = {}
            const requestObjectParamKeys = Object.keys(params)
            console.log('this.apiobject',this.apiobject)
            requestObjectParamKeys.forEach(key => {
                let param = this.apiobject.parameters.find(param => (param.name == key))
                if(param != undefined){
                    if (param.in == 'path'){
                        inPath = inPath.replace('{' + key + '}',params[key])
                    }
                    if (param.in == 'query'){
                        queryThread += key + '=' + encodeURIComponent(params[key]) + '&'
                    }
                }
                else {
                    let param = this.apiobject.epdata.requestBody.content['application/x-www-form-urlencoded'].schema.properties[key]
                    if(param != undefined){
                        this.requestBody.requestLength++
                        this.requestBody[key] = params[key]
                    }
                }
            })
            if (queryThread.indexOf('&') > -1) {
                queryThread = queryThread.slice(0,queryThread.length-1)
            }
            else {
                queryThread = ''
            }
            const finalPath = inPath + queryThread
            return finalPath
        }
        else{
            return this.apiobject.path
        }
    }
}

function requestRefresh (token) {
    return new Promise((resolve, reject) => {
        let body = {
            grant_type : 'refresh_token',
            client_id : client_id,
            redirect_uri : redirect_uri,
            refresh_token : token.refresh_token,
        }
        request({
            method : 'POST',
            uri : 'https://api.etsy.com/v3/public/oauth/token',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : encodeBody(body),
        }, (error, response, body) => {
            if (error) reject(error)
            if (error) console.log(error)
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                resolve({ response: response, body: body });
            }
            else {
                reject({ response: response, body: body });
            }
        })
    })
}

function encodeBody(params) {
    var formBody = []
    for (var property in params) {
        var encodedKey = property
        var encodedValue = params[property]
        formBody.push(encodedKey + "=" + encodedValue)
    }
    return formBody.join("&")
}

module.exports.EtsyClient = EtsyClient
