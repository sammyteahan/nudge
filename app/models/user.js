var mongoose = require('mongoose'),
		bcrypt	 = require('bcrypt'),
		database = require('../config/database'),
		Schema   = mongoose.Schema;

var userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

userSchema.plugin(database.autoIncrement.plugin, 'User');

userSchema.methods.generateHash = function() {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.verifyPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = database.connection.model('User', userSchema);