const mongoose = require('mongoose');

// Define the Contribution_Request schema
const contributionRequestSchema = new mongoose.Schema({
  CR_ID: { type: String, required: true, unique: true },
  ProjectID: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  ContributorID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, required: true }, // e.g., Pending, Approved, Rejected
  RequestType:{type:String, required:true}
});

// Create the Contribution_Request model
const ContributionRequest = mongoose.model('Contribution_Request', contributionRequestSchema);

module.exports = ContributionRequest;