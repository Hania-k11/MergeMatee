import React, { useState } from "react";

const SearchFilters = ({ onFilter }) => {
  const [difficulty, setDifficulty] = useState("");
  const [techStack, setTechStack] = useState("");

  const handleSearch = () => {
    onFilter({ difficulty, techStack });
  };

  return (
    <div className="flex flex-col space-y-4 bg-white p-4 rounded shadow-lg">
      <label>
        Difficulty:
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option value="">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>
      <label>
        Tech Stack:
        <input
          type="text"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          placeholder="e.g., React, Node.js"
          className="ml-2 p-2 border rounded"
        />
      </label>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SearchFilters;
