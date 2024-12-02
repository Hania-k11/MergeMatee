const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming the user schema is saved in models/User.js

const app = express();
const port = 5000;

// Middleware
app.use(express.json());  // Use built-in express.json() instead of body-parser

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MergeMate')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// POST endpoint to insert user data
app.post('/api/users', async (req, res) => {
    try {
      const { github_id, name, profile_picture, experience_level, tech_stack, expertise, role, registered } = req.body;
  
      // Validate required fields
      if ( !github_id || !name) {
        return res.status(400).json({
          message: 'Validation error: id, github_id, and name are required.',
        });
      }
  
      // Create a new user instance
      const newUser = new User({
        
        github_id,
        name,
        profile_picture,
        experience_level,
        tech_stack,
        expertise,
        role,
        registered: registered !== undefined ? registered : false, // Default to false if not provided
      });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      // Send the saved user as the response
      res.status(201).json({
        message: 'User created successfully',
        user: savedUser,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({
        message: 'Server error',
        error: error.message,
        stack: error.stack, // Include stack trace for debugging
      });
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
