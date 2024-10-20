//create a model for the user stories 
import mongoose from 'mongoose'


const ContactSchema = new mongoose.Schema({
//first namme
first_name: {
  type: String,
  trim: true,
  required: 'First name is required'
  },

//last name
last_name: {
  type: String,
  trim: true,
  required: 'Last name is required'
  },

//email
email: {
  type: String,
  trim: true,
  unique: 'Email already exists',
  match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  required: 'Email is required'
  },
});

const Contact = mongoose.model('Contact', ContactSchema);
export default Contact;
