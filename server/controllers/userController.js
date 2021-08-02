const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const userController = {};
/**
* createUser - create and save a new User into the database.
*/
// userController.createUser = async (req, res, next) => {
//   try {
//     await User.create({ username, password }, (err, user) => {
//       //if err do something
//       if(err){
//         res.render('../api/signup', {error: err});
//       }
//       else {
//         console.log(user);
//         res.locals.id = user._id;
//         return next();
//       }
//     });
//     // const userID = result._doc_doc._id.id
//     // res.locals.said = userID;
//     // console.log(result);
//     // return next();
//   } catch (err) {
//     console.log('error in userController.verifyUser');
//     return next(err);
//   }
// };

userController.readParams = (req, res, next) => {
  const {
    username, password,
  } = req.query;
  res.locals = { username, password };
  console.log('locals in readParams are un,pw', res.locals.username , res.locals.password);
  return next();
};

userController.addDataBaseEntry = async (req, res, next) => {
  //grab un and pw from locals 
  const username = res.locals.username;
  const password = res.locals.password;
  let result;

  await User.create({ username, password }, (err, user) => {
    //if err do something
    if(err){
      res.render('/', {error: err});
    }
    else {
      console.log('user: ', user);
      res.locals.id = user._id;
      return next();
    }
  });
};
/** ssid? */

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.query;
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
    console.log('error in userController.verifyUser');
    return next(err);
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
