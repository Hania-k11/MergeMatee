import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import  { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Hero = () => {

    const CLIENT_ID = "Ov23liStmKwivcKl3p9U";  // Replace with your GitHub client ID
    const REDIRECT_URI = "http://localhost:5173";
    const navigate = useNavigate(); 

    const { updateUserDetails } = useAuth();

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
                    navigate('/register');
                    console.log('registerrr')
                
                  })
                .catch(err => console.error('Error getting access token:', err));
        }
    }, []);  // Only run once when the component mounts

    const fetchUserDetails = (token) => {
        // Fetch user details from the backend using the access token
        axios.get(`http://localhost:5000/api/getUser?token=${token}`)
            .then(response => {
              updateUserDetails(response.data);
              console.log('User Details:', response.data);  // Handle the user details
              updateUserDetails(response.data);
            
            })
            .catch(err => console.error('Error fetching user details:', err));
    };

    const handleLogin = () => {
        // Redirect to GitHub's OAuth authorization URL
        const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user`;
        window.location.href = githubAuthURL;  // Redirect user to GitHub for authentication
    };



  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-gray-300 to-white text-center px-4 pt-24">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find Your Next Open-Source Adventure!
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Connect with meaningful projects and start making a difference in the open-source world.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >

<Button onClick={handleLogin}
  size="lg"
  className="bg-zinc-900 text-white shadow-md hover:border-white border-2 hover:scale-105 hover:shadow-lg hover:bg-zinc-800 transition-all duration-300"
>
  <Github className="mr-2 h-5 w-5" /> Get Started with GitHub Login
</Button>
        {/* <Button size="lg" variant="outline">Discover Projects</Button> */}
      </motion.div>
      <motion.div

    //   CARDDDSSSS
        className="mt-12 mb-6 relative w-full max-w-3xl h-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-64 bg-white text-zinc-700 rounded-lg shadow-lg flex items-center justify-center text-4xl font-bold">
            Project 1
          </div>
        </div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: [0, 10, 0, -10, 0],
            x: [0, 50, 0, -50, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-48 h-64 bg-zinc-600 bg-opacity-10 rounded-lg shadow-lg flex items-center justify-center text-4xl font-bold">
            Project 2
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: [0, -10, 0, 10, 0],
            x: [0, -50, 0, 50, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <div className="w-48 h-64 bg-zinc-600 bg-opacity-30 text-black text-opacity-50 rounded-lg shadow-lg flex items-center justify-center text-4xl font-bold">
            Project 3
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
