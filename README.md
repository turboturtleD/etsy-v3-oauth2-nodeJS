# etsy-oauth2-nodeJS

<b>Experimental nodeJS client for Etsy v3 API using Express for Node.</b>

<b>Required Node Modules:</b><br>
`const CryptoJS = require('crypto-js')           // https://www.npmjs.com/package/crypto-js
const { v4: uuidv4 } = require('uuid')          // https://www.npmjs.com/package/uuid
const Str = require('@supercharge/strings')     // https://www.npmjs.com/package/@supercharge/strings
const request = require('request')              // https://www.npmjs.com/package/request
const openapi = require('./openapi')            //
const { client_id, salt, scopes, redirect_uri } = require('./etsyAuth.config')
var app = express()
const etsy = require('./etsyAuth')
const session = require('express-session')`

# Config:

Edit <b>etsyAuth.config</b> file by entering your <b>client_id, salt, scopes, and redirect_uri</b> for token authorization.

# Basic usage:

Initialize by instantiating a <b>new EtsyClient</b> Object</b>

`let initializeTenant = new etsy.EtsyClient().initializeTenant()`

Store <b>initializeTenant</b> object in a secure server location for later authentication, in this example we use the **express-session** node module.

`req.session.initializeTenant = initializeTenant`

Next, redirect the client to consent URL.</b>

`res.redirect(302, initializeTenant.consentUrl)`

After client authorizes the app on the Etsy Authorization page, they are returned to the <b>redirect_uri</b> provided in the <b>etsyAuth.config</b> file.  Now we must validate the server response by comparing the **state** value from the response with the **state** value saved in the session **initializeTenant** object.

`if (req.session.initializeTenant.state != state) throw new Error('State value matching failed')`

If the **state** values match, we want to proceed to obtain the **access_token**.

First we form the **tokenRequest** object using the **initializeTenant.preimage** retrieved from session storage, and the authorization **code** provided from the server in the previous response.  

`const initializeTenant = req.session.initializeTenant`<br>
`const tokenRequest = {
    code : req.query.code,
    code_verifier : initializeTenant.preimage,
}`

At this point the **initializeTenant** object is no longer needed and should be removed from storage as it will not be reused.

`delete req.session.initializeTenant`

Next make the request for the **access_token**.

`let result = await etsy.EtsyClient.getAccessToken(tokenRequest)`<br>
`let token = JSON.parse(result)`

The **access_token** (token.access_token) expires in **1 hour**, and the **refresh_token** in **90 days**.  Next, we add expiration dates to the token so we know when it needs to be refreshed or re-authenticated:

`const enhanced_token = etsy.EtsyClient.enhanceToken(token)`

Before each endpoint request is made, the token is examined to be expired or valid for use.  

`access_token = EtsyClient.refresh(token)`

If the **access_token** is still valid, it will be returned immediately.  If the **access_token** has expired, but the **refresh_token** is still valid, the token will be renewed asychronously and returned by a **Promise** when complete.  If the **refresh_token** has expired, this function will return an **error:** 'refresh token expired, re-athentication required' with no further handling.

Finally a request can be made to the v3 endpoints by using the EtsyClient.request function.  Currently this function is only able to handle basic requests.

# ***Etsy v3 endpoints are currently in a Closed Alpha group test phase, and they cannot be accessed without your client_id being explicitly whitelisted by Etsy.com.  I have not yet been able to successfully test these endpoints, and cannot at this time attest to the actual functionality or the validity of the following endpoint request functions***

Request example using **EtsyClient.request()**:

`let result = await etsy.EtsyClient.request('getShopPaymentAccountLedgerEntries', { 
    min_created : 946684800,
    max_created : 1000000000,
    limit : 100,
    offset : 100,
    },
    token.access_token,
    null)`

EtsyClient leverages the <b>openapi JSON</b> file provided here: https://github.com/etsy/open-api/blob/64a5211aeb2210bfad4e3d057c64b856643f8696/openapi.json

EtsyClient.request accepts an <b>operationId</b> string matching Etsy's openapi operationId values, followed by a parameter object in the format:

`EtsyClient.request('operationId', { parameterKey : parameterValue, parameterKey2 : parameterValue2, ...}, access_token, requestBody)`

If the <b>access_token</b> is not provided or set to a value of <b>null</b>, it will not be included in the request.  OAuth restricted endpoints should fail if authentication is required and not supplied.

If the request is successful, the result can be parsed with the data provided by the endpoint:

`const ledgerEntries = JSON.parse(result.body)`


