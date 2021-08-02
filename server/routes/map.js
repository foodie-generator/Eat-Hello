const express = require('express');
const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const router = express.Router();
const mapController = require('../controllers/mapController');

// router.get('/', mapController.testing, (req, res) => {
//   //console.log('req.locals.data: ', req.locals.data);
//   //console.log('payload is: ', res.locals.data.json());
//   console.log('res.locals.data: ', res.locals.data);
//   return res.status(200).send(req.locals.data)
// })

// mapController.getGeoCode,

// post('/restaurant')

router.post('/', mapController.getGeoCode, (req, res) => {
  //   console.log('finally sending back!!', req.locals);
  return res
    .status(200)
    .send({ latitude: req.locals.lat, longitude: req.locals.lng });
});

module.exports = router;
