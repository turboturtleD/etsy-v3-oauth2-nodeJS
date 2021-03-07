# etsy-oauth2-nodeJS

# Experimental nodeJS client for Etsy v3 API using Express for Node.

<hr>

# Required Node Modules:
# express
# express-session
# body-parser
# crypto-js
# uuid
# @supercharge/strings
# request

<hr>

# Config:

# Edit etsyAuth.config file by entering your client_id, salt, scopes, and redirect_uri for token authorization.

# Basic usage:

# Initialize new EtsyClient Object

let initializeTenant = new etsy.EtsyClient().initializeTenant()

# Store initilizeTenant in a secure server location for recall and further authentication. Next redirect client to consent URL.

# Consent URL: initializeTenant.consentUrl

# After client authorizes, they are returned to the callback url provided in the etsyAuth.config file.  Here we must validate the server response by comparing the state variable from the response with the state value stored in the initializeTenant object.

# Test:


# (initializeTenant.state == req.query.state)

# If the state values match, continue to obtain Access Token using the code_challenge pre-image and the code verifier provided from the server response:

const tokenRequest = {
    code : req.query.code,
    code_verifier : initializeTenant.preimage,
}

# At this point the initializeTenant object is no longer removed from session storage.  Now make the request for the access_token:

let result = await etsy.EtsyClient.getAccessToken(tokenRequest)

let token = JSON.parse(result)

# The access_token (token.access_token) expires in 1 hour, and the refresh token in 90 days.  Now let's add expiration dates to our token so we know when it needs to be refreshed or re-authenticated:

const enhanced_token = etsy.EtsyClient.enhanceToken(token)

# When the time comes to make a request, the token should be examined to determine if it's expired or valid for use.  You can do this using the EtsyClient.refresh function.  

access_token = EtsyClient.refresh(token)

# If the token is still valid, it will be returned immediately and no additional process is required.  If the access_token has expired, but the refresh_token is still valid, the token will be renewed asychronously and returned by a Promise when complete.  If the refresh_token has expired, this operation will return an error: 'refresh token expired, re-athentication required'

# Finally a request can be made to the v3 endpoints by using the EtsyClient.request function.  Currently this is only able to handle requests using basic parameters.

# ***Etsy v3 endpoints are currently in the Alpha testing phase and cannot be accessed without your client_id being explicitly whitelisted.  I have not yet been able to successfully test these endpoints, and cannot at this time attest to the actual functionality of the validity of the following endpoint requests***

# Request example using EtsyClient.request:

let result = await etsy.EtsyClient.request('getShopPaymentAccountLedgerEntries', { 
    min_created : 946684800,
    max_created : 1000000000,
    limit : 100,
    offset : 100,
    },
    token.access_token,
    null)

# EtsyClient leverages the openapi JSON file provided here: https://github.com/etsy/open-api/blob/64a5211aeb2210bfad4e3d057c64b856643f8696/openapi.json

# EtsyClient.request accepts an operationId string matching Etsy's openapi operationId values, followed by a parameter object in the format:

# EtsyClient.request('operationId', { parameterKey : parameterValue, parameterKey2 : parameterValue2, ...}, access_token, requestBody)

# If the access_token is not provided or set to a value of null, it will not be included in the request.  OAuth restricted endpoints should fail if the token is required and not supplied.

# If the request is successful, the result can be parsed with the data provided by the endpoint:

const ledgerEntries = JSON.parse(result.body)


