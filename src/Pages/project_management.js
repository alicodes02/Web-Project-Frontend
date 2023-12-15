import React, { useState } from 'react';
import Base from '../Components/Base';

const ProjectManagement = () => {
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
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Create a New Project</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-dark mt-3 btn-purple">
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
    </Base>
  );
};

export default ProjectManagement;
