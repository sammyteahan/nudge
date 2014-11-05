// jwt integration
var jwt = require('jwt-simple');
var payload = {foo: 'bar'};
var secret = 'supersecretkey123';

// encode
var token = jwt.encode(payload, secret);

//decode 
var decoded = jwt.decode(token, secret);
console.log(decoded);

module.exports = jwt;