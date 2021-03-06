const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
//const mongoose = require('mongoose');
//const userController = require('./controllers/userController');
//const cookieParser = require('cookie-parser');
const googleUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+toronto+canada&key=AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw';
const cuisineRouter = require('./routes/cuisine');
const mapController = require('./controllers/mapController');

// activate the cookieParser 
//app.use(cookieParser());
app.use(express.json());

app.get('/annie', mapController.testing, (req, res) => {
  //console.log('req.locals.data: ', req.locals.data);
  //console.log('payload is: ', res.locals.data.json());
  return res.json({
    status: true,
    payload: req.locals.data
  });
});

// a start point for the routes
//app.use('/api', cuisineRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}
// error handlers
//app.use('*',(req, res) => res.status(404).sendFile(path.join(__dirname, '/client/404.html')));

// global error handler 
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  // console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app; //-> http://localhost:3000/
// localhost:8080