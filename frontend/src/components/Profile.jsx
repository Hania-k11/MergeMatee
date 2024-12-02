import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { userDetails } = useAuth();

  // Handle cases where userDetails might be null or undefined
  const name = userDetails?.name || 'Unknown User';
  const profilePicture = userDetails?.avatar_url || 'https://via.placeholder.com/150';
  const githubUsername = userDetails?.login || 'N/A';
  const experienceLevel = userDetails?.experience_level || 'Not Provided';
  const techStack = userDetails?.tech_stack?.join(', ') || 'Not Provided';
  const expertise = userDetails?.expertise || 'Not Provided';
  const role = userDetails?.role || 'Contributor';

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-zinc-400 via-gray-200 to-white px-6 py-16">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8 space-y-6">
        {/* Profile Header */}
        <div className="flex justify-center items-center space-x-4">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
          />
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
            <p className="text-lg text-gray-600">{role}</p>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">GitHub Username:</span>
            <span className="text-gray-500">{githubUsername}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Experience Level:</span>
            <span className="text-gray-500">{experienceLevel}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Tech Stack:</span>
            <span className="text-gray-500">{techStack}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Expertise:</span>
            <span className="text-gray-500">{expertise}</span>
          </div>
        </div>

        {/* Button to go back to Dashboard */}
       
      </div>
    </section>
  );
};

export default Profile;
