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

  const handleDeleteProject = async (projectId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/delete-project/${projectId}`, {
        // Add your authorization headers if needed
      });

      console.log('Project deleted successfully:', response.data);
      // After deletion, update the projects list
      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project');
    }
  };

  const handleEditProject = async (updatedProject) => {
    try {
      const response = await axios.put(`http://localhost:3000/update-project/${updatedProject.id}`, updatedProject, {
        // Add your authorization headers if needed
      });

      console.log('Project updated successfully:', response.data);
      // Update the projects list with the edited project
      setProjects(
        projects.map((project) => (project.id === updatedProject.id ? { ...project, ...updatedProject } : project))
      );
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Error updating project');
    }
  };

  return (
    <Base>
      <div className="container mt-5"  style={textStyle}>
        {/* Display fetched projects */}
        {projects.map((project) => (
         <Project
         key={project.id}
         id={project.id}
         projectName={project.projectName}
         description={project.description}
         projectCategory={project.projectCategory}
         duedate={project.dueDate} // Ensure correct property names are used
         assignto={project.assignTo} // Ensure correct property names are used
         visibility={project.visibility}
         onDelete={() => handleDeleteProject(project.id)}
         onEdit={(updatedProject) => handleEditProject(updatedProject)}
       />
        ))}
      </div>
    </Base>
  );
};

export default GetAllProjects;
