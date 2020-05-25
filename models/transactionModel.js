const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Transaction = new Schema({

	user_id: {
		type: String
	},
	trans_type: {
		type: String
	},
	trans_amount: {
		type: Number
	},
	trans_date:{
		type: Date,
		default: Date.now
	},
	trans_category:{
		type: String
	},
	trans_note:{
		type:String
	}
});

module.exports = mongoose.model('Transaction', Transaction);