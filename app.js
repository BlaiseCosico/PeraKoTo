const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const passport = require('passport');
const cookieSession = require('cookie-session');

const PORT = 4000;

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

let Transaction = require('./routes/transactionRoute');
let Login = require('./routes/loginRoute');
// let Income = require('./routes/incomeRoute');
// let Expense = require('./routes/expenseRoute');


app.use(cors());
app.use(bodyParser.json());




mongoose.connect('mongodb://127.0.0.1:27017/perakoto', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.use('/transaction', Transaction);
// app.use('/income', Income);
// app.use('/expense', Expense);

//login portion

app.use('/login', Login);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});