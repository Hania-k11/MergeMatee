const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  github_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
  },
  experience_level: {
    type: String,
  },
  tech_stack: {
    type: [String],
  },
  expertise: {
    type: String,
  },
  role: {
    type: String,
  },
  registered: {
    type: Boolean,
    default: false, // Default value for the registered field
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
