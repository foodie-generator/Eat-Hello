const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
​
const  mongoURI = 'mongodb+srv://eathello:eathello123@cluster0.njyj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'eat-hello'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


//create User Schema for the database
const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  location: { type: String },
  preferCuisine: { type: String },
  username: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  answerGenerated: {type: String}
});
​
// this is to hash the password before saving into data
userSchema.pre('save', fuction(next)) {
  const salt =bcrypt.genSaltSync(SALT_WORK_FACTOR);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  return next();
}
​
module.exports = mongoose.model('User', userSchema);