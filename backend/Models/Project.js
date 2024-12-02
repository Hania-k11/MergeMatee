const mongoose = require('mongoose');

// Define the project schema
const projectSchema = new mongoose.Schema({
  ProjectID: { type: String, required: true, unique: true }, // Primary Key
  OwnerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Foreign Key referencing UserID
  title: { type: String, required: true },
  description: { type: String },
  difficulty: { type: String }, // e.g., Easy, Medium, Hard
  tech_stack: { type: [String] }, // Array of technologies
  contribution_guidelines: { type: String },
  repository_URL: { type: String },
});

// Create the model for the project schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;