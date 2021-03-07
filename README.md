# etsy-oauth2-nodeJS

<b>Experimental nodeJS client for Etsy v3 API using Express for Node.</b>

<b>Required Node Modules:</b><br>
express<br>
express-session<br>
body-parser<br>
crypto-js<br>
uuid<br>
@supercharge/strings<br>
request

# Config:

Edit <b>etsyAuth.config</b> file by entering your <b>client_id, salt, scopes, and redirect_uri</b> for token authorization.

# Basic usage:

Instantiate a <b>new EtsyClient</b> Object</b>

`let initializeTenant = new etsy.EtsyClient().initializeTenant()`

Store <b>initializeTenant</b> object in a secure server location for later authentication.
Next redirect the client to consent URL.</b>

`let consentURL = initializeTenant.consentUrl`

After client authorizes, they are returned to the <b>redirect_uri</b> provided in the <b>etsyAuth.config</b> file.  Now we must validate the server response by comparing the <b>state</b> value from the response with the <b>state</b> value stored in the <b>initializeTenant</b> object.

`if (initializeTenant.state === req.query.state) doSomething()`

If the state values match, we want obtain the <b>access_token</b> using the <b>initializeTenant.preimage</b> and the authorization <b>code</b> provided from the server in the previous step:

`const tokenRequest = {
    code : req.query.code,
    code_verifier : initializeTenant.preimage,
}`

At this point the <b>initializeTenant</b> object is no longer needed and should be removed from storage as it will not be reused.  Next make the request for the <b>access_token</b>:

`let result = await etsy.EtsyClient.getAccessToken(tokenRequest)`
`let token = JSON.parse(result)`

The <b>access_token</b> (token.access_token) expires in <b>1 hour</b>, and the <b>refresh_token</b> in <b>90 days</b>.  Next, enhance the <b>token</b> with expiration dates token so we know when it needs to be refreshed or re-authenticated:

`const enhanced_token = etsy.EtsyClient.enhanceToken(token)`

When the time comes to make a request, the token must be examined to determine if it's expired or valid for use.  You can do this using <b>EtsyClient.refresh()</b>.  

`access_token = EtsyClient.refresh(token)`

If the <b>token</b> is still valid, it will be returned immediately and no additional process is required.  If the <b>access_token</b> has expired, but the <b>refresh_token</b> is still valid, the token will be renewed asychronously and returned by a <b>Promise</b> when complete.  If the <b>refresh_token</b> has expired, this operation will return an <b>error</b>: 'refresh token expired, re-athentication required' with no further handling.

Finally a request can be made to the v3 endpoints by using the EtsyClient.request function.  Currently this function is only able to handle basic requests.

# ***Etsy v3 endpoints are currently in the Alpha testing phase, and they cannot be accessed without your client_id being explicitly whitelisted.  I have not yet been able to successfully test these endpoints, and cannot at this time attest to the actual functionality or the validity of the following endpoint request functions***

Request example using <b>EtsyClient.request</b>:

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


