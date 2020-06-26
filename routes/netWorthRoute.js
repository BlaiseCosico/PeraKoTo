const express = require('express')
const router = express.Router();

const Transaction = require('../models/transactionModel');

//Get New Worth
router.get('/getNet/:userID', async (req, res) => {
    try{
        let total = 0, income = 0, expense = 0;
        const net = await Transaction.find({user_id: req.params.userID});
        if(!net.length){
            res.status(404).json({message: "User not found"})
        }

        net.forEach(item => {
            if (item.trans_type == "income") income += item.trans_amount
            else expense += item.trans_amount
        });
        
        total = income - expense
        res.status(200).json(total)

    }catch(err){
        res.status(404).json({message: err})
    }
});

//Get top 5 Tags/Category (maybe should just make a database for category)
router.get('/top5/:userID', async (req,res) => {
    try{
        let category = {};
        const top5 = await Transaction.find({user_id: req.params.userID});
        if(!top5.length){
            res.status(404).json({message: "User not found"})
        }

        top5.forEach(item => {
            if (item.trans_category in category) category[item.trans_category] += item.trans_amount
            else category[item.trans_category] = item.trans_amount
        });
        
        res.status(200).json(category) //either sort this but dictionaries/objects are not order or make a new schema
    }catch(err){
        res.status(400).json({message: err})
    }
   
});


module.exports = router;