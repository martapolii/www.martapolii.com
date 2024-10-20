//create a model for the users
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
//namme
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
    },

//email
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
    },

//password
password: {
  type: String,
  required: 'Password is required'
  },
  
//created
  created: {
    type: Date,
    default: Date.now
    },

//updated
  updated: {
    type: Date,
    default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);
export default User;
