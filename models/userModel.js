const mongoose = require('mongoose');
const Scheme = mongoose.Schema;


let User = new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	}
});

module.export = mongoose.model('User', User);