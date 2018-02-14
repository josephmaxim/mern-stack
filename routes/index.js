const express = require('express');

const router = express.Router();

/* Serve React on root path "/" */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MERN-stack' });
});

module.exports = router;
