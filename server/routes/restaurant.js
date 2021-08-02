const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');

router.post('/', mapController.sendRestaurant, (req, res) => {

  const response = req.locals.restaurants;  
  return res.status(202).send(JSON.stringify(response));
});

module.exports = router;
