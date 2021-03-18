const client_id = `***CONSUMER API KEY***`    // Etsy public key
const redirect_uri = `***CALLBACK URL***`  //redirect uri for token authentication
const salt = `***RANDOM STRING USED FOR SALT***` // Random string used for salt
const scopes = `***SCOPES IN SPACE SEPARTED LIST***`  //desired scopes in space separated list per etsy docs

module.exports.client_id = client_id
module.exports.redirect_uri = redirect_uri
module.exports.salt = salt
module.exports.scopes = scopes
