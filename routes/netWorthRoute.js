const express = require('express')
const router = express.Router();

const Transaction = require('../models/transactionModel');

//Get New Worth
router.get('/getNet/:userID', async (req, res) => {
    try{
        let total = 0;
        const net = await Transaction.find({user_id: req.params.userID});
        if(!net.length){
            res.status(404).json({message: "User not found"})
        }

        net.forEach(item => {
            total += item.trans_amount;
        });

        // for(let i=0; i<net.length; ++i){
        //     total += net[i].trans_amount;
        // }
 
        res.status(200).json(total)

    }catch(err){
        res.status(404).json({message: err})
    }
});

//Get top 5 Tags/Category (maybe should just make a database for category)
router.get('/top5/:userID', async (req,res) => {
    const top5 = await Transaction.find() //get all categories by user ID then sort them, return top 5
});


module.exports = router;