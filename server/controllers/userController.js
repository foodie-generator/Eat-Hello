const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const userController = {};
/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  try {
    console.log('req.query: ', req.query);
    const {
      username, password,
    } = req.query;
    await User.create({ username, password }, (err, user) => {
      //if err do something
      if(err){
        res.render('../client/signup', {error: err});
      }
      else {
        console.log(user);
        res.locals.id = user._id;
        return next();
      }
    });
    // const userID = result._doc_doc._id.id
    // res.locals.said = userID;
    // console.log(result);
    // return next();
  } catch (err) {
    console.log('error in userController.verifyUser');
    return next(err);
  }
};
/** ssid? */

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.params;
    const userQuery = {
      username,
    };
    // look in our database and find an entry with user's username
    const result = await User.findOne(userQuery, (err, username) => {
      if (!username || err) {
        console.log('user not found');
        res.redirect('/api/signup');
      }
    });
    console.log(result);
    // if we find it, compare user's password with database's password
    //const passwordCompare = await bcrypt.compare(password, result.password);
    // get mongo id from result body and set on res locals for cookies
    // to compare the user's input(hased) to verify - if true return next
    //if (passwordCompare) return next();
    if (result.password === password) return next();
    return next({
      err: console.log('passwords do not match'),
    });
  } catch (err) {
    return (console.log('error in userController.verifyUser'));
  }
};
/**
 * to access the user's data after the user logs in and in order to acess the user's location,
 * prefer cousine and food/ answer the user got from the past
*/
userController.profileData = (req, res, next) => {
  // write code here
};

module.exports = userController;
