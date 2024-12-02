import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios'; // Ensure axios is imported

const Register = () => {
  const navigate = useNavigate();
  const { userDetails } = useAuth();

  // Handle cases where userDetails might be null or undefined
  
  const name = userDetails?.name || '';
  const profile_picture = userDetails?.avatar_url || '';
  const github_id = userDetails?.id || '';

  const [experienceLevel, setExperienceLevel] = useState('');
  const [techStack, setTechStack] = useState('');
  const [expertise, setExpertise] = useState('');
  const [role, setRole] = useState('Contributor'); // Default to "Contributor"

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Prepare user data
      const userData = {
        github_id,
        name,
        profile_picture,
        experience_level: experienceLevel,
        tech_stack: techStack.split(',').map((stack) => stack.trim()), // Trim spaces
        expertise,
        role,
        registered: true,
      };

      // Make API request to register the user
      const response = await axios.post('http://localhost:5000/api/users', userData);

      if (response.status === 201) {
        console.log('User registered successfully');
        window.alert('User registered successfully!');
        navigate('/dashboard'); // Redirect to Dashboard after successful registration
      }
    } catch (error) {

      window.alert('Registration failed!');
      console.error(
        'Registration failed:',
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-zinc-400 via-gray-200 to-white text-center px-6 py-16">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8 -mt-7">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Join MergeMate</h2>
        <p className="text-sm text-gray-600 mb-6">
          Register as a Contributor or Project Owner and start collaborating on amazing projects.
        </p>
        <form className="space-y-6" onSubmit={handleRegistration}>
          {/* Role Field */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="role"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Contributor">Contributor</option>
              <option value="Project Owner">Project Owner</option>
            </select>
          </div>

          {/* Experience Field */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="E.g., 3 years in React"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              required
            />
          </div>

          {/* Tech Stack Field */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">
              Tech Stack
            </label>
            <input
              type="text"
              name="techStack"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="E.g., React, Node.js, Python"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              required
            />
          </div>

          {/* Expertise Field */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">
              Expertise
            </label>
            <input
              type="text"
              name="expertise"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="E.g., Frontend, Backend, Database"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-lg shadow-md py-3 hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
