var express 	= require('express'),
	app 		= express(),
	bodyParser 	= require('body-parser'),
	path		= require('path'),
	router 		= express.Router();

var userRouter = require('./routers/userRoute');
app.use('/api', userRouter);

var auth = require('./config/auth');
app.set('jwtTokenSecret','supersecret123');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for debugging purposes
router.use(function(req, res, next) {
	console.log('A request has been sent');
	next();
});

router.get('/', function(req, res) {
	res.sendFile(path.resolve('../client/build/index.html'));
});

app.use('/api', router);


var port = 3000;
app.listen(port);
console.log('Gettin jiggy on port ' + port);

