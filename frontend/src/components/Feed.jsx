import React, { useState } from "react";
import SwipeCard from "./SwipeCard";
import SearchFilters from "./SearchFilters";

const Feed = ({ userPreferences }) => {
    const [projects, setProjects] = useState([]); // Initial project data
    const [filteredProjects, setFilteredProjects] = useState([]);
  
    const handleFilter = (filters) => {
      const { difficulty, techStack } = filters;
  
      const filtered = projects.filter((project) => {
        return (
          (difficulty === "" || project.difficulty === difficulty) &&
          (techStack === "" ||
            project.techStack.some((stack) =>
              stack.toLowerCase().includes(techStack.toLowerCase())
            ))
        );
      });
  
      setFilteredProjects(filtered);
    };
  
    return (
      <div>
        <SearchFilters onFilter={handleFilter} />
        <div className="flex flex-col items-center space-y-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <SwipeCard
                key={project.id}
                project={project}
                onLike={handleLike}
                onDismiss={handleDismiss}
              />
            ))
          ) : (
            <p>No projects match your filters.</p>
          )}
        </div>
      </div>
    );
  };
  

export default Feed;
