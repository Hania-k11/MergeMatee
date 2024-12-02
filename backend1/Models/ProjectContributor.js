const mongoose = require('mongoose');

// Define the Contribution_Request schema
const projectContributorSchema = new mongoose.Schema({
  PC_ID: { type: String, required: true, unique: true },
  ProjectID: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  ContributorID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Create the Contribution_Request model
const ProjectContributor= mongoose.model('ProjectContributor', projectContributorSchema);

module.exports = ProjectContributor;




