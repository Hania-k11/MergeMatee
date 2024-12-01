import React from 'react'
import { useState } from 'react';


const AddProject = () => {

        const [projectDetails, setProjectDetails] = useState({
      repoName: "",
      description: "",
      difficulty: "",
      techStack: "",
      guidelines: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProjectDetails((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Project Details:", projectDetails);
      // Add logic to send projectDetails to your API
      alert("Project added successfully!");
      setProjectDetails({
        repoName: "",
        description: "",
        difficulty: "",
        techStack: "",
        guidelines: "",
      });
    };
  return (
     <main className="flex-grow p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-6">Add a New Project</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="repoName"
              >
                Repository Name
              </label>
              <input
                type="text"
                id="repoName"
                name="repoName"
                value={projectDetails.repoName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter repository name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={projectDetails.description}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter project description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="difficulty"
              >
                Difficulty
              </label>
              <select
                id="difficulty"
                name="difficulty"
                value={projectDetails.difficulty}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select difficulty</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="techStack"
              >
                Tech Stack
              </label>
              <input
                type="text"
                id="techStack"
                name="techStack"
                value={projectDetails.techStack}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter tech stack (e.g., React, Node.js)"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="guidelines"
              >
                Contribution Guidelines
              </label>
              <textarea
                id="guidelines"
                name="guidelines"
                value={projectDetails.guidelines}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter contribution guidelines"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Project
            </button>
          </form>
        </main>
  )
}

export default AddProject