const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
  TaskID: { type: String, required: true, unique: true },
  ProjectID: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;