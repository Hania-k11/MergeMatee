const mongoose = require('mongoose');

// Define the Notification schema
const notificationSchema = new mongoose.Schema({
  NotificationId: { type: String,unique:true, required: true }, // Owner of the project
  contributorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }, // Reference to the Project related to the notification
  type: { type: String, enum: ['Contribution Request', 'Invitation'], required: true }, // Type of notification (either Contribution Request or Invitation)
  status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], required: true }, // Status of the request (can be Pending, Accepted, or Rejected)
  message: { type: String, required: true }, // Message to be sent as part of the notification
  createdAt: { type: Date, default: Date.now }, // Timestamp of when the notification was created
});

// Create the Notification model
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;