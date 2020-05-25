const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const router = express.Router();

let Expense = require('../models/expenseModel');

router.get('/', (req, res) => {
    Expense.find({}, (err, expense) => {
	        if (err) {
	            console.log(err);
	        } else {
	            res.json(expense);
	        }
	    });
	});


router.post('/add', (req, res) => {
	let expense = new Expense(req.body);
	expense.save()
		.then(todo =>{
			res.status(200).json({'expense': "expense transaction added successfully"})
		})
		.catch(err => {
			res.status(400).send('adding new expense failed');
		});
});


module.exports = router;