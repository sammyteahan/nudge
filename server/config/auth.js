var jwt 	= require('jwt-simple'),
    app 	= require('../server.js'),
	payload = {foo: 'bar'},
	secret  = 'supersecretkey123';

// encode
var token = jwt.encode(payload, secret);

//decode 
var decoded = jwt.decode(token, secret);
console.log(decoded);

module.exports = jwt;