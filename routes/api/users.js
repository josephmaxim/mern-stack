const express = require('express');

const router = express.Router();
const Users = require('../../models/user');

router.get('/list', (req, res, next) => {
  Users.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    return res.json(users);
  });
});

module.exports = router;
