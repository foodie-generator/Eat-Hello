const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');



/**
 * login
 */
router.post('/login', userController.readParams, userController.getUser, userController.passwordCompare, (req, res) => {
  return res.json({
    status: true,
    payload: {
      passwordsMatch: res.locals.pwResult,
      foodOptionHistory: res.locals.history
    }
  });
});

/**
 * signup
 */
router.post('/signup', userController.readParams, userController.addDataBaseEntry, userController.updatePizzaHistory, (req, res) => {
  res.status(200).send();
});



module.exports = router;
