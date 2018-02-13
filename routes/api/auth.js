const express = require('express');
const passport = require('passport');
const User = require('../../models/user');

const router = express.Router();

// Register Endpoint
router.post('/register', (req, res) => {
  const newUser = new User(req.body);
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }
    return res.send(JSON.stringify(user));
  });
});

// Login Endpoint
router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({ error: 'There was an error logging in' }));
  });
});

// Logout Endpoint
router.post('/logout', (req, res) => {
  req.logOut();
  return res.send(JSON.stringify(req.user));
});

module.exports = router;
