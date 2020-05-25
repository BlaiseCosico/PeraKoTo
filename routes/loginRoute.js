const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const router = express.Router();

require('../config');

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

router.get('/', (req, res) => res.send('hello'))
//nothing is passed into req after logging in
router.get('/success', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))
router.get('/failed', (req, res) => res.send('Failed'))

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/login/success');
 
  });

module.exports = router;