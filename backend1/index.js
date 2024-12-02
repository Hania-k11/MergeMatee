const express = require('express');
const cors = require('cors');
const axios = require('axios');
const qs = require('qs');  // Import qs library


const connectDB = require('./db'); // Import the DB connection
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// Connect to MongoDB
connectDB();

// Middleware for parsing JSON data
app.use(express.json());

// Sample route to check if server is running
app.get('/', (req, res) => {
  res.send('Hello, Mergemate backend is running!');
});






// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
