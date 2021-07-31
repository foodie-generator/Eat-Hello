

const mapController = {};

mapController.testing = async (res, req, next) => {
  
  try {
    const map = await axios ('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+toronto+canada&key=AIzaSyCaSo1pxwCY44jihxAMHhJjVJ3mHbFLsPw');
    const response = await response.json(map);
    console.log(response);
    res.locals.data = response;
    console.log('res.locals.data: ', res.locals.data);
    return next();
  } catch (err) {
    console.log('mapController.testing error: ', err);
    return next();
  }
};

module.exports = mapController;
