const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.get('/health-check', (req, res) => {
  res.send('hi');
});



/**
 * login
 */
router.post('/login', userController.verifyUser, (req, res) => {
  // what should happen here on successful log in?
  res.status(200).send;
});

/**
 * Authorized routes
 */
router.post('/signup', userController.createUser, (req, res) => {
  // /**
  // * The previous middleware has populated `res.locals` with users
  // * which we will pass this in to the res.render so it can generate
  // * the proper html from the `secret.ejs` template
  // */
  res.status(200).send;
});

// post request to /signup
// post request to /login

module.exports = router;
