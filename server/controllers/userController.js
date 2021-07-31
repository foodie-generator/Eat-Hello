const User = require('../models/userModel');
const userController = {};
​
/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};
​
/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async(req, res, next) => {
    try {
      const { firstName, lastName, location, preferCuisine, username, password } = req.body;
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        location: location,
        preferCuisine: preferCuisine,
        username: username,
        password: password,  
      };
      const result = await User.create(newUser);
      res.locals.newUserData = result;
      return res.locals.newUserData;
    }
    catch(err) {
      return next(err);
    }
  };
​
​
​
/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  // write code here
​
};
​
/**
 * to access the user's data after the user logs in and in order to acess the user's location, 
 * prefer cousine and food/ answer the user got from the past
*/
userController.profileData = (req, res, next) => {
  // write code here
​
};
​
module.exports = userController;