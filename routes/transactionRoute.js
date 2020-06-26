const express = require('express');
const router = express.Router();

const Transaction = require('../models/transactionModel');

//Get all transactions
router.get('/', (req, res) => {
	    Transaction.find({}, (err, transaction) => {
	        if (err) {
	            console.log(err);
	        } else {
	            res.json(transaction);
	        }
	    });
	});

// Get transaction by _id
router.get('/id/:id', (req, res) =>{
	let id = req.params.id;
	Transaction.findById(id, (err, transaction) => {
		if(err)
			res.status(404).send({message:'could not find id'})
		res.json(transaction)
	});
});

// get transactino by user id
router.get('/userid/:user_id', (req, res) => {
	let user_id = req.params.user_id;
	Transaction.find({user_id: user_id}, (err, transaction) => {
		if(err)
			res.status(404).send({message:'could not find user'})
		res.json(transaction)
	})
});


// add transaction
router.post('/add', (req, res) => {
	if(Object.keys(req.body).length === 0){
		return res.status(404).send({message:'Values cannot be empty'})
	}
	let transaction = new Transaction(req.body);
	transaction.save()
		.then(todo =>{
			res.status(200).json({'transaction': "transaction added successfully"})
		})
		.catch(err => {
			res.status(400).send('adding new transaction failed');
		});

	// use findIdandUpdate
	// let category = new Category({
	// 	user_id : res.body.user_id;
	// 	category : res.body.category;
	// 	category_total 
	// })
});

//what exactly can you update??
//income value, expense value, note, type, category
router.patch('/updateIncome/:id', (req, res) => {
	let id = req.params.id;
	// return res.status(200).send({message:'found id'})
	Transaction.findByIdAndUpdate(id, req.body, {new: true})
		.then(todo =>{
			res.status(200).json({'transaction': "transaction added successfully"})
		})
		.catch(err => {
			res.status(400).send('adding new transaction failed');
		});

});



// Get Gross Income	(iz not working!!)
router.get('/grossIncome', (req, res) => {
    Transaction.find({}, (err, transaction) => {
        if (err) {
            console.log(err);
        } else {
            res.json('Gross Income: ' + sumGrossIncome(transaction));
        }
    });
});


// Delete Transaction (WORKING)
router.delete('/delete/:id', function(req,res){
	Transaction.findByIdAndRemove({"_id": req.params.id}).then(function(){})
	res.send({'Message': 'Transaction Successfully deleted.'})
})


module.exports = router;