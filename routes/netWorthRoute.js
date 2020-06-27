const express = require('express')
const router = express.Router();

const Transaction = require('../models/transactionModel');
const Category = require('../models/categoriesModel')

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
        
        total = income + expense
        res.status(200).json(total)

    }catch(err){
        res.status(404).json({message: err})
    }
});

router.get('/top5/:userID', async (req,res) => {
    try{
        let category = {}
        const top5 = await Category.find({user_id: req.params.userID}).sort({category_total: 'desc'});

        if(!top5.length){
            res.status(404).json({message: "User not found"})
        }

        top5.forEach(item => {
            if (item.category in category) category[item.category] += item.category_total
            else category[item.category] = item.category_total
        });
        
        res.status(200).json(category)
    }catch(err){
        res.status(400).json({message: err})
    }
   
});


module.exports = router;