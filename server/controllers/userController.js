const User = require('../models/userModel');
const userController = {};
const bcrypt = require('bcryptjs');
​
/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/

// userController.getAllUsers = (req, res, next) => {
//   User.find({}, (err, users) => {
//     // if a database error occurs, call next with the error message passed in for the express global error handler to catch
//     if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
//     // store retrieved users into res.locals and move on to next middleware
//     res.locals.users = users;
//     return next();
//   });
// };
​
/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async(req, res, next) => {
    try {
      const { firstName, lastName, location, preferCuisine, username, password } = req.params;
      console.log(req.params)
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        location: location,
        preferCuisine: preferCuisine,
        username: username,
        password: password,  
      };
      const result = await User.create(newUser);
      // const userID = result._doc_doc._id.id
      // res.locals.said = userID;
      console.log(result);
      return next();
    }
    catch(err) {
      return next(err);
    }
  };
​

/** ssid? */
​
​
/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async(req, res, next) => {
  try {
    const { username, password } = req.params;
    const userQuery = {
      username: username,
    }
    //look in our database and find an entry with user's username
    const result = await user.findOne(userQuery);
    console.log(result);
    //if we find it, compare user's password with database's password 
    const passwordCompare = await bcrypt.compare(password, result._doc.password);
    // get mongo id from result body and set on res locals for cookies
    // to compare the user's input(hased) to verify - if true return next 
    if (passwordCompare) return next();
    else return next({
      err: console.log('passwords do not match')
    }); 
  }
  catch(err) {
    console.log('userController.verifyUser error')
  }
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