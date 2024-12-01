import React, { useState } from "react";
import AddProject from "./AddProject";
import TaskBoard from "./TaskBoard";
import Notifications from "./Notifications";
import Feed from "./Feed"; // Import the TaskBoard component
import SwipeCard from "./SwipeCard";
import { useAuth } from "../context/AuthContext";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Track sidebar state
  const [activeComponent, setActiveComponent] = useState("AddProject"); // Track which component to display
  // const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

  const { userDetails } = useAuth();

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside
        className={`bg-zinc-800 text-white w-64 p-4 transition-all duration-300  ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <h1 className="text-2xl font-bold mb-6">MergeMate</h1>
        <ul>
          <li className="py-2 px-4">
            <button
              className="w-full text-left py-2 px-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => setActiveComponent("TaskBoard")} // Show TaskBoard
            >
              Task Board
            </button>
          </li>
          
          <li className="py-2 px-4">
            <button
              className="w-full text-left py-2 px-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => setActiveComponent("AddProject")} // Show AddProject
            >
              Add Project
            </button>
            
          </li>
          <li className="py-2 px-4">
            <button
              className="w-full text-left py-2 px-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => setActiveComponent("ExploreProject")} // Show AddProject
            >
              Explore Project
            </button>
            
          </li>
          <li className="py-2 px-4">
            <button
              className="w-full text-left py-2 px-4 hover:bg-gray-700 cursor-pointer"
            >
              My Projects
            </button>
          </li>
          <li className="py-2 px-4">
            <button
              className="w-full text-left py-2 px-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => setActiveComponent("Notifications")}
            >
              Notifications
            </button>
          </li>
          <li className="py-2 px-4">
            <button
              className="w-full text-left py-2 px-4 hover:bg-gray-700 cursor-pointer"
            >
              My Profile
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="flex justify-between items-center bg-gray-100 px-6 py-4 shadow-xl">
          {/* Hamburger Icon for All Devices */}
          <button
            className="block text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>

          <div className="flex items-center">
            <h1 className="text-xl font-bold">Welcome, {name} !</h1>
          </div>

          <button className="bg-zinc-800 text-white px-4 py-2 rounded hover:bg-gray-600">
            Logout
          </button>
        </header>

        {/* Main Section */}
        <div className=" ">
          {/* Conditionally Render Components */}
          {activeComponent === "AddProject" && <AddProject />}
          {activeComponent === "TaskBoard" && <TaskBoard />}
          {activeComponent === "Notifications" && <Notifications />}
          {activeComponent === "ExploreProject" && <Feed />}
          
          
          {/* Add more components here as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
