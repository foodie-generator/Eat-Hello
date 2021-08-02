const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');

router.post('/', mapController.sendRestaurant, (req, res) => {
  // req.locals.resturants
  // console.log(
  //   'finally sending back restaurant!!',
  //   req.locals.restaurants
  //   // req.body
  //   // res.locals
  //   // res.body
  // );
  // console.log(req.locals.restaurants);
  return res.status(200).json(req.locals.resturants);
});

module.exports = router;
