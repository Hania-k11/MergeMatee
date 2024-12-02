const mongoose = require('mongoose');

// Define the project schema
const projectSchema = new mongoose.Schema({
  ProjectID: { 
    type: String, 
    required: true, 
    unique: true
   },
   OwnerID:{
    type: String,
    required: true
   }, // Primary Key
  description: {
     type: String 
    },
  difficulty: {
     type: String
     }, // e.g., Easy, Medium, Hard
  tech_stack: { 
    type: [String] 
  }, // Array of technologies
  contribution_guidelines: { 
    type: String
   },

   repo_name: { 
    type: String, 
    required: true 
  }, // Name of the repository
});

// Create the model for the project schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;