const mongoose = require('mongoose');


const uri = "mongodb://admin:perakoto@perakoto-shard-00-00-z4tj7.mongodb.net:27017,perakoto-shard-00-01-z4tj7.mongodb.net:27017,perakoto-shard-00-02-z4tj7.mongodb.net:27017/PeraKoTo?ssl=true&replicaSet=PeraKoTo-shard-0&authSource=admin&retryWrites=true&w=majority"


const connectDB = async() => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true })
    .then( () => {
      console.log("MongoDB database connection established successfully");
    })
    .catch((err) => {
      console.log(err);
    });

}

module.exports = connectDB;

