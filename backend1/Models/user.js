// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'ID is required']
  },
  github_id: {
    type: String,
    required: [true, 'GitHub ID is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  profile_picture: {
    type: String
  },
  experience_level: {
    type: String
  },
  tech_stack: {
    type: [String]
  },
  expertise: {
    type: String
  },
  role: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;