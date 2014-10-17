var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require and connect our DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nudge');
var User = require('./models/user');

var port = 3030;

// Middleware for debugging purposes
router.use(function(req, res, next) {
	console.log('A request has been sent');
	next();
});

router.get('/', function(req, res) {

//  testing the db
//	var user = new User();
//	user.name = 'Sam';
//	user.save();

	res.send('Welcome to Nudge');
});

router.route('/users')

	.post(function(req, res) {
		var user = new User();
		user.name = req.body.name;
		bear.save(function(err) {
			if(err)
				res.send(err);

			res.send('User Created');
		});
	})

	.get(function(req, res) {
		User.find(function(err, users) {
			if(err)
				res.send(err);

			res.send(users);
		});
	});

app.use('/api', router);

app.listen(port);
console.log('Gettin jiggy on port ' + port);

