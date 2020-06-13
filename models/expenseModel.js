const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Expense = new Schema({

	trans_id: {
		type: String
	},
	exp_amount: {
		type: Number
	},
	exp_category: {
		type: String
	},
	exp_date:{
		type: Date,
		default: Date.now
	},
	exp_note:{
		type:String
	}
});

module.exports = mongoose.model('Expense', Expense);