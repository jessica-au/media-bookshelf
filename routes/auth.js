const express = require('express');
const router = express.Router();
// loaded auth from server.js through app.use

//render page auth/signup from views when /auth/signup url is accessed
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/signup', (req, res) => {
  // what does this need to do before it renders the page?
  // needs to log user in
  res.render('profile');
})

router.post('/login', (req, res) => {
  res.render('profile')
})
module.exports = router;
