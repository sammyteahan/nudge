var User 		= require('../models/user'),
	express 	= require('express'),
	jwt			= require('jwt-simple'),
	path		= require('path'),
	Moment  	= require('moment'),
	router  	= express.Router(); 

router.route('/token')
	.post(function (req, res) {
		if(!req.body.email || !req.body.password) {
			res.send(401);
		}
		User.findOne({email: req.body.email}, function (err, user) {
			if(err) {
				res.send(401);
			}
			if(!user) {
				res.send(401);
			}
			if(!user.verifyPassword(req.body.password)) {
				res.send(401);
			}
			var expires = Moment().add(3, 'days').valueOf();
		});
	});

module.exports = router;