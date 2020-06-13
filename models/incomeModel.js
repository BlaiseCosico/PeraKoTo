const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Income = new Schema({

	trans_id: {
		type: String
	},
	total_amount: {
		type: Number
	},
	date:{
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Income', Income);