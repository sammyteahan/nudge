var User 	= require('../models/user'),
	express = require('express'),
	path    = require('path'),
	isAuthenticated = ('../config/auth').isAuthenticated,
	router  = express.Router();

router.route('/users')

	.post(function(req, res) {
		var user = new User();
		user.email = req.body.email;
		user.password = req.body.password;
		user.save(function(err) {
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

module.exports = router;