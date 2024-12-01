import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const SwipeCard = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'E-commerce Platform', description: 'An online marketplace for buying and selling products.' },
    { id: 2, name: 'Task Management App', description: 'A productivity tool for organizing and tracking tasks.' },
    { id: 3, name: 'Social Media Dashboard', description: 'A centralized hub for managing multiple social media accounts.' },
    { id: 4, name: 'Fitness Tracker', description: 'An app to monitor workouts, nutrition, and health goals.' },
    { id: 5, name: 'Recipe Finder', description: 'A tool to discover and save recipes based on available ingredients.' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(projects.length - 1);
  const [action, setAction] = useState('');
  const childRefs = React.useMemo(
    () => Array(projects.length).fill(0).map(() => React.createRef()),
    [projects.length]
  );

  const handleSwipe = (dir, index) => {
    if (index === currentIndex) {
      setAction(dir === 'right' ? 'Liked' : 'Disliked');
      setTimeout(() => setAction(''), 1000); // Clear message after 1 second
      setProjects((prevProjects) => prevProjects.slice(0, -1));
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const swipe = (dir) => {
    if (currentIndex >= 0) {
      setAction(dir === 'right' ? 'Liked' : 'Disliked');
      setTimeout(() => setAction(''), 1000); // Clear message after 1 second
      childRefs[currentIndex].current.swipe(dir); // Programmatically swipe the card
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-red-300 p-4">
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-[28rem] mb-8">
        {projects.map((project, index) => (
          <TinderCard
            ref={childRefs[index]}
            key={project.id}
            onSwipe={(dir) => handleSwipe(dir, index)}
            preventSwipe={['up', 'down']}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 flex-grow">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">
                    Project {projects.length - currentIndex} of {projects.length}
                  </span>
                  <span className="text-sm font-semibold text-purple-600">Swipe or use buttons</span>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => swipe('left')}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => swipe('right')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      {projects.length === 0 && (
        <div className="text-center mt-8">
          <h3 className="text-2xl font-bold text-white mb-2">No more projects!</h3>
          <p className="text-white">You've gone through all the projects.</p>
        </div>
      )}
      {action && (
        <div className="absolute top-10 bg-black bg-opacity-50 text-white text-lg font-bold px-6 py-3 rounded-full shadow-md animate-fade">
          {action}
        </div>
      )}
    </div>
  );
};

export default SwipeCard;