var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.route('/users')
	.post(function(req, res) {
		var user = new User();
		user.name = req.body.name;
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