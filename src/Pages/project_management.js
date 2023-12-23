import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Base from '../Components/Base';


const ProjectManagement = () => {

  const textStyle = {
    backgroundColor: 'rgb(128,0,128,0.7)',
    padding: '50px',
    borderRadius: '8px',
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
    visibility: 'privateToMe',
    // Add more fields as needed for your project
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to handle the submission of projectData
    console.log('Project Data:', projectData);
    // You can perform API calls, store the data, or perform any necessary actions here
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
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="projectName"
                value={projectData.projectName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={projectData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="projectCategory" className="form-label">
                Project Category
              </label>
              <input
                type="text"
                className="form-control"
                id="projectCategory"
                name="projectCategory"
                value={projectData.projectCategory}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dueDate"
                name="dueDate"
                value={projectData.dueDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="assignTo" className="form-label">
                Assign To
              </label>
              <input
                type="text"
                className="form-control"
                id="assignTo"
                name="assignTo"
                value={projectData.assignTo}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="visibility" className="form-label">
                Visibility
              </label>
              <select
                className="form-select"
                id="visibility"
                name="visibility"
                value={projectData.visibility}
                onChange={handleInputChange}
              >
                <option value="privateToMe">Private to Me</option>
                <option value="public">Public</option>
                <option value="privateToMembers">Private to Members</option>
              </select>
            </div>
            <motion.button
                type="submit"
                className="btn btn-dark mt-3 btn-purple w-100"
                style={{ backgroundColor: 'purple' }}
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
