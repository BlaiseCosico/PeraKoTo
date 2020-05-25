const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const router = express.Router();

let Transaction = require('../models/transactionModel');

router.get('/', (req, res) => {
	    Transaction.find({}, (err, transaction) => {
	        if (err) {
	            console.log(err);
	        } else {
	            res.json(transaction);
	        }
	    });
	});


router.post('/add', (req, res) => {
	let transaction = new Transaction(req.body);
	transaction.save()
		.then(todo =>{
			res.status(200).json({'transaction': "transaction added successfully"})
		})
		.catch(err => {
			res.status(400).send('adding new transaction failed');
		});
});


module.exports = router;