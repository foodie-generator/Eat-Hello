const express = require('express');
const { resetWarningCache } = require('prop-types');

const router = express.Router();
const userController = require('../controllers/userController');



/**
 * login
 */
router.post('/login', userController.readParams, userController.getUser, userController.passwordCompare, (req, res) => {
  return res.json({
    status: true,
    payload: {
      passwordsMatch: res.locals.pwResult
    }
  });
});

/**
 * signup
 */
router.post('/signup', userController.readParams, userController.addDataBaseEntry, userController.updatePizzaHistory, (req, res) => {
  res.status(200).send();
});

router.get('/foodHistory', userController.getFoodHistory, (req, res) => {
  return res.json({
    status: true,
    payload: {
      history: res.locals.history
    }
  });
});



module.exports = router;
