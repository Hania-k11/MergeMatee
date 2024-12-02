const mongoose = require('mongoose');

// Define the schema for contribution requests
const contributionRequestSchema = new mongoose.Schema({
  CR_ID: { 
    type: String, 
    required: true, 
    unique: true 
  }, // Unique Contribution Request ID
  ProjectID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true 
  }, // References a Project
  ContributorID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // References a Contributor/User
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected'], 
    default: 'Pending' 
  }, // Status of the request
  RequestType: { 
    type: String, 
    enum: ['swipe_right'], 
    required: true 
  }, // Type of request
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Create the model
const ContributionRequest = mongoose.model('ContributionRequest', contributionRequestSchema);

module.exports = ContributionRequest;
