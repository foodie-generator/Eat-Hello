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
  res.status(200).send;
});

/**
 * signup
 */
router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).send;
});

// post request to /signup
// post request to /login

module.exports = router;
