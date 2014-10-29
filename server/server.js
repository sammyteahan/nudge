var express 	= require('express'),
	app 		= express(),
	bodyParser 	= require('body-parser'),
	email		= require('emailjs/email'),
	router 		= express.Router(),
	userRouter  = require('./routers/userRoute'),
	auth 		= require('./config/auth'),
	port 		= process.env.port || 3030;

// using our routes and setting some configurations
app.use('/api', router);
app.use('/api', userRouter);

app.use(bodyParser.json()); // For pulling data out of json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.set('jwtTokenSecret','supersecret123');

// tmp server config for emailjs
// var server  = email.server.connect({
//    host:    "smtp.gmail.com", 
//    user:    "sammyteahan@gmail.com", 
//    password:"fear217268", 
//    ssl:     true
// });

// var message = {
// 	text: 'Please bless this works',
// 	from: 'Sammy <sam@lightningkite.com>',
// 	subject: 'Testing emailjs'
// };

// server.send({
// 	text: "testing testing",
// 	from: "sam <sam@lightningkite.com>",
// 	to: "sammy <sammyteahan@gmail.com>",
// 	cc: "me <sam.teahan@aggiemail.usu.edu>",
// 	subject: "testing emailjs"
// }, function(err, message) { console.log( err || message ); });


// Middleware for debugging purposes
router.use(function(req, res, next) {
	console.log('A request has been sent');
	next();
});

router.get('/', function(req, res) {
	// server.send(message, function(err, message) { console.log(err || message); });
	res.send('Welcome to Nudge');
});

app.listen(port);
console.log('Check out the party on port ' + port);