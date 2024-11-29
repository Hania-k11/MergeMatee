import React, { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const CLIENT_ID = "Ov23liStmKwivcKl3p9U";  // Replace with your GitHub client ID
    const REDIRECT_URI = "http://localhost:5173";  // This should match your frontend's URL

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');  // Get the 'code' parameter from the URL query string

        if (code) {
            // Send the code to your backend to exchange it for an access token
            axios.post('http://localhost:5000/api/getAccessToken', { code })
                .then(response => {
                    const { access_token } = response.data;
                    localStorage.setItem('token', access_token);  // Save token to localStorage
                    fetchUserDetails(access_token);  // Fetch user details using the token
                })
                .catch(err => console.error('Error getting access token:', err));
        }
    }, []);  // Only run once when the component mounts

    const fetchUserDetails = (token) => {
        // Fetch user details from the backend using the access token
        axios.get(`http://localhost:5000/api/getUser?token=${token}`)
            .then(response => {
                console.log('User Details:', response.data);  // Handle the user details
            })
            .catch(err => console.error('Error fetching user details:', err));
    };

    const handleLogin = () => {
        // Redirect to GitHub's OAuth authorization URL
        const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user`;
        window.location.href = githubAuthURL;  // Redirect user to GitHub for authentication
    };

    return (
        <div>
            <h1>GitHub Login App</h1>
            <button onClick={handleLogin}>Login with GitHub</button>
        </div>
    );
};

export default Login;
