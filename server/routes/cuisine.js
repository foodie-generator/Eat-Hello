const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.get('/health-check', (req, res) => {
  res.send('hi');
});

/**
 * login
 */
router.post('/login', [userController.readParams,userController.getUser,userController.passwordCompare], (req, res) => {
  if(res.locals.pwResult){
    res.status(200).send(true);
    //RETURN SOMETHING ELSE, to help with future (like thier ID)

  }else{
    res.status(200).send(false);
  }
});

/**
 * signup
 */
router.post('/signup', [userController.readParams,userController.addDataBaseEntry], (req, res) => {
  res.status(200).send();
});

// post request to /signup
// post request to /login

module.exports = router;
