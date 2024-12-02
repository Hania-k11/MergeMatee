// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  github_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  profile_picture: { type: String }, // URL of the profile picture
  experience_level: { type: String }, // Example: Beginner, Intermediate, Expert
  tech_stack: { type: [String] }, // Array of technologies
  expertise: { type: String }, // Example: Frontend, Backend
  role: { type: String } // Example: Developer, Manager
});

// Create and export the user model
const User = mongoose.model('User', userSchema);
module.exports = User;