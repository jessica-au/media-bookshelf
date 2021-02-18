const express = require('express');
const router = express.Router();

// import database
const db = require('../models');

router.get('/', (req, res) => {
    res.render('categories')
  });


module.exports = router;