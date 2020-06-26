const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const passport = require('passport');
const cookieSession = require('cookie-session');

const dbConnection = require('./connection')
const PORT = 4000;

dbConnection()

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

let Transaction = require('./routes/transactionRoute');
let Login = require('./routes/loginRoute');
let Net = require('./routes/netWOrthRoute');


app.use(cors());
app.use(bodyParser.json());


app.use('/transaction', Transaction);
app.use('/login', Login);
app.use('/net', Net);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});