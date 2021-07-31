const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
​
//create User Schema for the database
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location: { type: String, required: true },
  preferCuisine: { type: String, required: true },
  username: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  answerGenerated: {type: String}
});
​
​
module.exports = mongoose.model('User', userSchema);