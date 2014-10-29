var mongoose 	  = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment');

require('mongoose-moment')(mongoose);

var connection = mongoose.createConnection('mongodb://localhost/nudge');
autoIncrement.initialize(connection);

module.exports = {
	autoIncrement : autoIncrement,
	connection : connection
};