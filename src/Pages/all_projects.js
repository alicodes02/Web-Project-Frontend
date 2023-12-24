import React, { useState, useEffect } from 'react';
import './project.css'; // Import your custom CSS file for styling
import Project from './project'; // Import the Project component you provided
import axios from 'axios';
import Base from '../Components/Base';



const GetAllProjects = () => {


  

  const textStyle = {
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgb(128,0,128,0.7)',
    width:'80%',
    padding: '50px',
    height:"250vh",
    borderRadius: '8px',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF'
  };
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from an API or a data source
    // Replace this with your actual API endpoint for projects
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/projects');
        setProjects(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleAPIError = (error) => {
    console.error('API Error:', error);
    alert('An error occurred while fetching data');
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:3001/delete-project/${projectId}`);
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
    } catch (error) {
      handleAPIError(error);
    }
  };

  const handleEditProject = async (updatedProject) => {
    try {
      await axios.put(`http://localhost:3001/update-project/${updatedProject.id}`, updatedProject);
      setProjects((prevProjects) =>
        prevProjects.map((project) => (project.id === updatedProject.id ? updatedProject : project))
      );
    } catch (error) {
      handleAPIError(error);
    }
  };

  return (
    <Base>
    
      <div className="container mt-5" style={textStyle}>
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            onDelete={handleDeleteProject}
            onEdit={handleEditProject}
          />
        ))}
      </div>
    </Base>
  );
};

export default GetAllProjects;