const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const router = express.Router();

let Income = require('../models/incomeModel');

router.get('/', (req, res) => {
	    Income.find({}, (err, income) => {
	        if (err) {
	            console.log(err);
	        } else {
	            res.json(income);
	        }
	    });
	});


router.post('/add', (req, res) => {
	let income = new Income(req.body);
	income.save()
		.then(todo =>{
			res.status(200).json({'income': "income transaction added successfully"})
		})
		.catch(err => {
			res.status(400).send('adding new income failed');
		});
});


module.exports = router;