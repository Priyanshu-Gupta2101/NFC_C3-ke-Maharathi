const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
