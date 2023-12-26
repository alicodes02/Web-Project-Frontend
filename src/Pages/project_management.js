import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Base from '../Components/Base';
import './project_management.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './placeholder.css'

const ProjectManagement = () => {

  const textStyle = {
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgb(128,0,128,0.7)',
    padding: '50px',
    borderRadius: '8px',
    width:'80%',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF'
  };

  const [projectData, setProjectData] = useState({
    projectName: '',
    description: '',
    projectCategory: '',
    dueDate: '',
    assignTo: '',
    visibility: '',
    // Add more fields as needed for your project
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:3001/project', projectData);

        const message = response.data.message;
       

  
        alert(message);
      
    }

    catch(error) {

        const failMessage = error.response.data.message;
  
        alert(failMessage);
  
        console.log(error);
  
        if (error.response) {
          console.error('Error:', error.response.data.message);
        } else if (error.request) {
          console.error('Error: No response received');
        } else {
          console.error('Error:', error.message);
        }
    }
  };

  return (
    
    <Base>
    <div className="container mt-5">
    <div className="container" style={textStyle}>
      <div className="row">
      <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5 }}
  className="col-md-8 offset-md-2"
  style={{
    border: '2px solid transparent',
    padding: '45px',
    borderRadius: '5px',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <motion.div
    initial={{ width: 0, left: 0 }}
    animate={{ width: '0.2%', left: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      background: 'white',
    }}
  />

  <motion.div
    initial={{ width: 0, right: 0 }}
    animate={{ width: '0.2%', right: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      background: 'white',
    }}
  />

  <motion.div
    initial={{ height: 0, top: 0 }}
    animate={{ height: '0.2%', top: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      background: 'white',
    }}
  />

  <motion.div
    initial={{ height: 0, bottom: 0 }}
    animate={{ height: '0.2%', bottom: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      background: 'white',
    }}
  />
          <h2>Create a New Project</h2>
          <motion.form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">
              <FontAwesomeIcon icon={faClipboard} style={{ marginRight: '10px', color:'white' }} />
                    Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="projectName"
                value={projectData.projectName}
                onChange={handleInputChange}
                style={{
                  border:projectData.projectName.length> 0 ? '1px solid white' : 'none', // Hide default border
                  borderBottom:  'none', // Show only bottom border
                  backgroundColor: 'transparent', // Set transparent background
                  outline: 'none', // Remove outline when focused
                  color: 'white', // Input text color
                  marginBottom: '5px', // Some spacing at the bottom
                  height: '8vh',
                  width: 'calc(100% - 38px)', // Adjust width considering button width
                  padding: '5px 10px', // Adjust padding
                  borderRadius: '10px',
                  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                }}
          
                placeholder="Enter project name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
              <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px', color:'white' }}/>


Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={projectData.description}
                onChange={handleInputChange}
                style={{
                  border:projectData.description.length> 0 ? '1px solid white' : 'none', // Hide default border
                  borderBottom:  'none', // Show only bottom border
                  backgroundColor: 'transparent', // Set transparent background
                  outline: 'none', // Remove outline when focused
                  color: 'white', // Input text color
                  marginBottom: '5px', // Some spacing at the bottom
                  height: '8vh',
                  width: 'calc(100% - 38px)', // Adjust width considering button width
                  padding: '5px 10px', // Adjust padding
                  borderRadius: '10px',
                  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                }}
          
                placeholder="Enter project description"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="projectCategory" className="form-label">
              <FontAwesomeIcon icon={faTh}  style={{ marginRight: '10px', color:'white' }}/>
                     Project Category
              </label>
              <input
                type="text"
                className="form-control"
                id="projectCategory"
                name="projectCategory"
                value={projectData.projectCategory}
                onChange={handleInputChange}
                style={{
                  border:projectData.projectCategory.length> 0 ? '1px solid white' : 'none', // Hide default border
                  borderBottom:  'none', // Show only bottom border
                  backgroundColor: 'transparent', // Set transparent background
                  outline: 'none', // Remove outline when focused
                  color: 'white', // Input text color
                  marginBottom: '5px', // Some spacing at the bottom
                  height: '8vh',
                  width: 'calc(100% - 38px)', // Adjust width considering button width
                  padding: '5px 10px', // Adjust padding
                  borderRadius: '10px',
                  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                }}
          
                placeholder="Enter your category"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '10px', color:'white' }} />
                  Due Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dueDate"
                name="dueDate"
                value={projectData.dueDate}
                onChange={handleInputChange}
                style={{
                  border:projectData.dueDate.length> 0 ? '1px solid white' : 'none', // Hide default border
                  borderBottom:  'none', // Show only bottom border
                  backgroundColor: 'transparent', // Set transparent background
                  outline: 'none', // Remove outline when focused
                  color: 'white', // Input text color
                  marginBottom: '5px', // Some spacing at the bottom
                  height: '8vh',
                  width: 'calc(100% - 38px)', // Adjust width considering button width
                  padding: '5px 10px', // Adjust padding
                  borderRadius: '10px',
                  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                }}
          
                placeholder="Enter project due date"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="assignTo" className="form-label">
              <FontAwesomeIcon icon={faUserCheck} style={{ marginRight: '10px', color:'white' }}/>
                  Assign To
              </label>
              <input
                type="text"
                className="form-control"
                id="assignTo"
                name="assignTo"
                value={projectData.assignTo}
                onChange={handleInputChange}
                style={{
                  border:projectData.assignTo.length> 0 ? '1px solid white' : 'none', // Hide default border
                  borderBottom:  'none', // Show only bottom border
                  backgroundColor: 'transparent', // Set transparent background
                  outline: 'none', // Remove outline when focused
                  color: 'white', // Input text color
                  marginBottom: '5px', // Some spacing at the bottom
                  height: '8vh',
                  width: 'calc(100% - 38px)', // Adjust width considering button width
                  padding: '5px 10px', // Adjust padding
                  borderRadius: '10px',
                  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                }}
          
                placeholder="Assign the project"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="visibility" className="form-label">
              <VisibilityIcon /> Visibility
              </label>
              <select
                className="form-select"
                id="visibility"
                name="visibility"
                value={projectData.visibility}
                onChange={handleInputChange}
                
                style={{
                  border:projectData.visibility.length> 0 ? '1px solid white' : 'none', // Hide default border
                  borderBottom:  'none', // Show only bottom border
                  backgroundColor: 'transparent', // Set transparent background
                  outline: 'none', // Remove outline when focused
                  color: 'white', // Input text color
                  height: '8vh',
                  marginBottom: '5px', // Some spacing at the bottom
                  width: 'calc(100% - 38px)', // Adjust width considering button width
                  padding: '5px 10px', // Adjust padding
                  borderRadius: '10px',
                  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                }}
          
                placeholder="Visibility"
              
              >
                <option value="privateToMe" background-color='purple'>Private to Me</option>
                <option value="public" backgroundColor='purple'>Public</option>
                <option value="privateToMembers" backgroundColor='purple'>Private to Members</option>
              </select>
            </div>
            <motion.button
                type="submit"
                className="btn btn-dark mt-3 btn-purple w-80"
                style={{ backgroundColor: 'purple',  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)', border:'none' ,  borderRadius: '10px', }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
              Create Project
              </motion.button>
              </motion.form>
              </motion.div>
            </div>
            </div>
      </div>
    </Base>
  );
};

export default ProjectManagement;
