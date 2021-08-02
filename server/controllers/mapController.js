const axios = require('axios');

const mapController = {};

// mapController.testing = async (res, req, next) => {
  
//   try {
//     const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+toronto+canada&key=AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw');
//     //console.log(response.data.results);
//     res.locals = { data : response.data.results };
//     // console.log('this is working. end of await');
//     return next();
//   } catch (err) {
//     console.log('mapController.testing error: ', err);
//     return next();
//   }

// };


// "location": {
//   "lat": 40.6385229,
//   "lng": -74.0153231
//   },
mapController.getGeoCode = async (res, req, next) =>{
  console.log('before try in getGeoCode')
  try{
    const zipCode = res.body.zipCode;
    console.log(`zipcode in geoCode controller:`, zipCode)
    const zipUrl = `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zipCode}&key=AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw `
    const response = await axios.get(zipUrl)
    console.log('zipUrl results', response)
    res.locals = {lat: response.data.results[0].geometry.location.lat, lng: response.data.results[0].geometry.location.lng}
    console.log('------------------------------------------------------')
    console.log('this is post request latitude', res.locals.lat, 'this is post request longitude', res.locals.lng)
    return next();
  }catch (err){
    console.log('mapController.geoCode error: ', err);
    return next();
  }
}


module.exports = mapController;
