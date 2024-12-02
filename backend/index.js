const express = require('express');
const cors = require('cors');
const axios = require('axios');
const qs = require('qs');  // Import qs library

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming the user schema is saved in models/User.js



// Middleware
  // Use built-in express.json() instead of body-parser


// Sample route to test the root path
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

// Route to exchange GitHub OAuth code for an access token
app.post('/api/getAccessToken', async (req, res) => {
    const { code } = req.body;
    const CLIENT_ID = "Ov23liStmKwivcKl3p9U";
    const CLIENT_SECRET = "d0079c64c05d1b1d835f2255c12563111b56965e";

    try {
        const response = await axios.post(
            `https://github.com/login/oauth/access_token`,
            qs.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code }),  // Use qs.stringify to format the body
            { headers: { Accept: 'application/json' } }
        );
        console.log(response.data);
        console.log('Received code:', code);  // Log the code received from the frontend
// Log the response from GitHub
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error exchanging code for access token:', error.message);  // Log the error message
        res.status(500).json({ error: 'Failed to fetch access token', details: error.message });
    }
});

// Route to fetch user details from GitHub
app.get('/api/getUser', async (req, res) => {
    const { token } = req.query;

    try {
        const response = await axios.get('https://api.github.com/user', {
            headers: { Authorization: `Bearer ${token}` },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
});

const { v4: uuidv4 } = require('uuid'); // Import UUID library
const Project = require('./Models/Project'); // Import the Project model

// API to add a new project
app.post('/api/projects', async (req, res) => {
  try {
    const { OwnerID, description, difficulty, tech_stack, contribution_guidelines, repo_name } = req.body;

    // Validate required fields
    if (!OwnerID || !description || !difficulty || !Array.isArray(tech_stack) || !contribution_guidelines) {
      return res.status(400).json({
        message: 'Validation error: All fields are required.',
      });
    }

    // Create a new project instance with a generated ProjectID
    const newProject = new Project({
      ProjectID: uuidv4(), // Automatically generate a unique ProjectID
      OwnerID,
      description,
      difficulty,
      tech_stack,
      contribution_guidelines,
      repo_name,
    });

    // Save the project to the database
    const savedProject = await newProject.save();

    // Respond with the saved project
    res.status(201).json({
      message: 'Project created successfully',
      project: savedProject,
    });
  } catch (error) {
    console.error('Error creating project:', error.message);
    res.status(500).json({
      message: 'Server error: Failed to create project',
      error: error.message,
    });
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MergeMate')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Route for the root path

app.get('/api/projects', async (req, res) => {
    try {
      const { ProjectID } = req.query; // Retrieve ProjectID from query parameters
  
      if (ProjectID) {
        // Fetch project by ProjectID
        const project = await Project.findOne({ ProjectID });
        if (!project) {
          return res.status(404).json({
            message: 'Project not found',
          });
        }
        return res.status(200).json({
          message: 'Project retrieved successfully',
          project,
        });
      }
  
      // Fetch all projects
      const projects = await Project.find();
      res.status(200).json({
        message: 'Projects retrieved successfully',
        projects,
      });
    } catch (error) {
      console.error('Error retrieving projects:', error.message);
      res.status(500).json({
        message: 'Server error: Failed to retrieve projects',
        error: error.message,
      });
    }
  });

//   const ContributionRequest = require('./Models/Contribution_Request'); // Import the model

 
//   // POST endpoint to create a contribution request
//   app.post('/api/contribution-request', async (req, res) => {
//     try {
//       const { ProjectID, ContributorID, RequestType } = req.body;
  
//       // Validate required fields
//       if (!ProjectID || !ContributorID || !RequestType) {
//         return res.status(400).json({ error: 'ProjectID, ContributorID, and RequestType are required.' });
//       }
  
//       // Verify the RequestType
//       if (RequestType !== 'swipe_right') {
//         return res.status(400).json({ error: 'Invalid RequestType. Only "swipe_right" is allowed.' });
//       }
  
//       // Create a new contribution request document
//       const newContributionRequest = new ContributionRequest({
//         CR_ID: uuidv4(), // Generate a unique ID
//         ProjectID: mongoose.Types.ObjectId(ProjectID), // Convert to ObjectId
//         ContributorID: mongoose.Types.ObjectId(ContributorID), // Convert to ObjectId
//         status: 'Pending', // Initial status is "Pending"
//         RequestType,
//       });
  
//       // Save the contribution request to the database
//       const savedRequest = await newContributionRequest.save();
  
//       // Respond with the saved request
//       res.status(201).json({
//         message: 'Contribution request created successfully',
//         request: savedRequest,
//       });
//     } catch (error) {
//       console.error('Error creating contribution request:', error.message);
//       res.status(500).json({ 
//         error: 'Failed to create contribution request', 
//         details: error.message,
//       });
//     }
//   });





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
app.get('/api/users/:github_id', async (req, res) => {
    try {
      const { github_id } = req.params; // Extract github_id from the URL parameter
  
      // Fetch the user with the given github_id from the database
      const user = await User.findOne({ github_id });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({
          message: `User with github_id ${github_id} not found.`,
        });
      }
  
      // Send the user data as the response
      res.status(200).json({
        message: 'User retrieved successfully',
        user,
      });
    } catch (error) {
      console.error('Error fetching user by github_id:', error);
      res.status(500).json({
        message: 'Server error',
        error: error.message,
        stack: error.stack, // Include stack trace for debugging
      });
    }
  });
  
  


app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
