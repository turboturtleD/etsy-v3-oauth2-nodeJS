var fs = require('fs')
var https = require('https')
var express = require('express')
var app = express()
var privateKey = fs.readFileSync(__dirname + '/server.key').toString()
var certificate = fs.readFileSync(__dirname + '/server.crt').toString()
var credentials = {key: privateKey, cert: certificate}
var server = https.createServer(credentials, app)
const etsy = require('./lib/etsyAuth')
const session = require('express-session')
const server_port = 8004

app.use(session({
    secret: 'etsy_v3_client_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

server.listen(server_port, function(){
    console.log('EtsyServer Up - PORT ' + this.address().port)
})

app.get('/auth-etsy', function(req,res){
    const initializeTenant = new etsy.EtsyClient().initializeTenant()   //instantiate new EtsyClient object and initialize tenant
    req.session.initializeTenant = initializeTenant                     //store the initializeTenant object for callback verification
    res.redirect(302, initializeTenant.consentUrl)                      //redirect to authorization URL
})

app.get('/etsy-oauth-redirect', async (req, res) => {
    try {
        const state = req.query.state                                   //store the api state responce in the state variable
        if(req.session.initializeTenant == undefined)throw new Error('No initializing tenants found')
        const initializeTenant = req.session.initializeTenant           //recall the initializeTenant object for response validation
        if(req.session.initializeTenant.state !== state)throw new Error('State value matching failed') //test the state object against server response for validation
        const error = req.query.error                                   //handle other server error responses
        if (error != undefined) {
            const error_description = req.query.error_description
            const error_uri = req.query.error_uri
            console.log(error_description, error_uri)
            throw new Error(error_description, error_uri)
        }
        const tokenRequest = {                              //prepare token request using authorization code and preimage of the code challenge created during initialization
            code : req.query.code,
            code_verifier : initializeTenant.preimage,
        }
        delete req.session.initializeTenant                             //remove initialization data from session cookie
        let result = await etsy.EtsyClient.getAccessToken(tokenRequest) //async request to obtain access_token
        const token = JSON.parse(result.body)                           //This is the **ACCESS_TOKEN** - parse token from server response body
        const enhanced_token = etsy.EtsyClient.enhanceToken(token)      //add expiration dates in milliseconds to token & user_id value
        if (req.session.tenants == undefined) req.session.tenants = []  //create session.tenants if not yet defined
        let matchedTenantIndex
        if (req.session.tenants.length > 0) {
            matchedTenantIndex = req.session.tenants.findIndex(tenant => (tenant.user_id == enhanced_token.user_id))   //look for duplicate tenant
        }
        if (matchedTenantIndex > -1 && matchedTenantIndex != undefined) {
            req.session.tenants[matchedTenantIndex] = enhanced_token    //if duplicate tenant is found - replace it
        }
        else {
            req.session.tenants.push(enhanced_token)                    //no duplicates found, add tenant to session.tenants
        }
        res.status(200).send(JSON.stringify(enhanced_token))//sendFile(__dirname + '/../index.htm')
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
        throw new Error(e)
    }
})

app.get('/tenants', async function(req,res){
    try{
        const tenants = req.session.tenants
        if(tenants != undefined){
            let activeTenantIndex = 0
            const tenantShops = []
            async function getShops(){
                if(tenants.length > activeTenantIndex){
                    let shop = await findTenantShop()
                    tenantShops.push(shop)
                    getShops()
                }
                else{
                    res.status(200).send(JSON.stringify(tenantShops))
                }
            }
            getShops()
            function findTenantShop(){
                return new Promise(async (resolve,reject) => {
                    try{
                        const activeTenant = tenants[activeTenantIndex++]
                        console.log(activeTenant)
                        let result = await etsy.EtsyClient.request('getShopByOwnerUserId', { 
                            user_id : activeTenant.user_id,
                        },
                        activeTenant, null )
                        const shop = JSON.parse(result.body)
                        resolve(shop)
                    }
                    catch (e) {
                        console.log(e)
                        reject(e)
                    }
                })
            }            
        }
        else {
            res.status(204).send('no session tenants found')
        }
    }
    catch(e) {
        console.log(e)
        throw new Error(e)
    }
})
