var fs = require('fs')
var fsp = require('fs').promises
var https = require('https')
var express = require('express')
var app = express()
var privateKey = fs.readFileSync(__dirname + '/server.key').toString()
var certificate = fs.readFileSync(__dirname + '/server.crt').toString()
var credentials = {key: privateKey, cert: certificate}
var server = https.createServer(credentials, app)
const etsy = require('./lib/etsyAuth')
const session = require('express-session')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const upload = multer()
const server_port = 8004


app.use(session({
    secret: 'etsy_v3_client_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(express.static('./uploads/'))
app.use(express.static('public'))

server.listen(server_port, function(){
    console.log('EtsyServer Up - PORT ' + this.address().port)
})

app.get('/', function(req,res){
    res.status(200).sendFile(__dirname + '/demo.htm')
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
        res.status(200).sendFile(__dirname + '/demo.htm')
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
        throw new Error(e)
    }
})

app.get('/tenant-shops', async function(req,res){
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
                    res.status(200).send({ count: tenantShops.length , tenantShops : tenantShops })
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
            let result = { count : 0 }
            res.status(200).send(result)
        }
    }
    catch(e) {
        console.log(e)
        throw new Error(e)
    }
})

app.post('/private/:user_id/req/:base64_request', upload.any(), async function(req,res){
    try{
        console.log('private request')
        //get user_id from uri parameter
        const user_id = req.params.user_id
        //find correct tenant for user_id
        let tenant = req.session.tenants.find(tenant => (tenant.user_id == user_id))
        //collect base64 encoded request parameter
        const base64_request = req.params.base64_request
        //decode base64 request buffer
        let buff = new Buffer.from(base64_request, 'base64')
        //parse JSON from decoded base64 request string
        let request = JSON.parse(buff.toString('ascii'))
        //set endpoint variable
        const endpoint = request.endpoint
        //set request parameters variable
        const parameters = request.parameters
        //set request body parameters
        const bodyParameters = request.bodyParameters
        //if multipart form data request containing a file
        if(req.files != undefined){
            //set index to zero for looping
            let fileIndex = 0
            //create results Array
            let results = []
            //check index against files length
            if(fileIndex < req.files.length){
                //upload current file
                uploadDataFile(req.files[fileIndex++])
            }
            //upload file function
            async function uploadDataFile(file){
                try{
                    //set a unique file name using a uuid
                    let fileName = uuidv4()
                    //promise request to write uploaded file to server "./uploads/" folder
                    await fsp.writeFile('./uploads/'+ fileName,file.buffer)
                    //create pseudo form object
                    let form = {}
                    //add file read stream to form
                    form[file.fieldname] = fs.createReadStream('./uploads/'+ fileName)
                    if(bodyParameters != undefined && bodyParameters != null  && typeof(bodyParameters) == 'object'){
                        let bodyReqKeys = Object.keys(bodyParameters)
                        bodyReqKeys.forEach(key => {
                            form[key] = bodyParameters[key]
                        })
                    }
                    //use EtsyClient static function to make request
                    let result = await etsy.EtsyClient.request(endpoint,parameters,tenant,form)
                    //delete temporary file from server
                    await fsp.unlink('./uploads/'+ fileName)
                    //add result to results Array
                    results.push({ statusCode : result.response.statusCode , result : JSON.parse(result.body) })
                    //test file index against files length to determine if all files have been uploaded
                    if(fileIndex < req.files.length) {
                        //upload next file
                        uploadDataFile(req.files[fileIndex++])
                    }
                    //if no more files to upload, respond to server request with results Array
                    else {
                        res.status(200).send(results)
                    }
                }
                catch(e){
                    console.log(e.body,'catch e')
                    res.status(e.response.statusCode).send(e.response.body)
                }
            }
        }
        else {
            //request does not contain files, make simple EtsyClient request with static function
            let result = await etsy.EtsyClient.request(endpoint,parameters,tenant)
            //return result
            res.status(result.response.statusCode).send(result.body)
        }        
    }
    catch (e) {
        if(e.response != undefined){
            //pipe Etsy server error and statuscode
            res.status(e.response.statusCode).send(e.body)
        }
        else {
            //Error not from Etsy server, likely an express issue
            console.log(e)
            res.status(500).send(e)
        }
    }
})

app.get('/public/req/:base64_request', base64Request, async function(req,res){
    try {
        let result = await etsy.EtsyClient.request(req.endpoint, req.parameters)
        res.status(result.response.statusCode).send(result.body)
    }
    catch(e) {
        res.status(500).send('Sh*t, something went wrong.')
    }
})

function base64Request(req,res,next){
    //collect base64 encoded request parameter
    const base64_request = req.params.base64_request
    //decode base64 request buffer
    let buff = new Buffer.from(base64_request, 'base64')
    //parse JSON from decoded base64 request string
    let request = JSON.parse(buff.toString('ascii'))
    //set endpoint variable
    req.endpoint = request.endpoint
    //set request parameters variable
    req.parameters = request.parameters
    next()
}
