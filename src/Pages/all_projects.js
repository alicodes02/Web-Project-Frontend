import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Base from '../Components/Base';

const GetAllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from an API or a data source
    // Replace this with your actual API endpoint for projects
    fetch('https://your-api-endpoint/projects')
      .then((response) => response.json())
      .then((data) => {
        // Update state with fetched projects
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const textStyle = {
    backgroundColor: 'rgb(128, 0, 128, 0.7)',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF',
  };

  return (
    <Base>
      <div className="container mt-5">
        {/* Display fetched projects */}
        {projects.map((project) => (
          <div key={project.id} className="container" style={textStyle}>
            {/* Display all project details */}
            <h2>{project.projectName}</h2>
            <p>Description: {project.description}</p>
            <p>Category: {project.projectCategory}</p>
            <p>Due Date: {project.dueDate}</p>
            <p>Assigned To: {project.assignTo}</p>
            <p>Visibility: {project.visibility}</p>
            {/* Render other project details based on your data */}
          </div>
        ))}
      </div>
    </Base>
  );
};

export default GetAllProjects;
