const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = new Schema ({
    user_id: {
		type: String
    },
    category: {
        type: String
    },
    category_total: {
        type: Number
    }

});

module.exports = mongoose.model('Category', categories);