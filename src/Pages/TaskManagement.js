import React, { useState, useEffect } from 'react';
import { Modal, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Task from './Task';
import { useLocation } from 'react-router-dom';

const TaskManagement = () => {


  const location = useLocation();
  const projectId = location.state?.projectId;

  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFoZWVtcmVobWFuMTVAZ21haWwuY29tIiwiaWF0IjoxNzAzNDkwNjIwfQ.uCKrWdVcQnynMtrXskXPuRP523Cp8OJPMfhCaNAqTP0';
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'high',
    assignee: '65873b6c4833e5d57facce4a',
  });
  const [filterCriteria, setFilterCriteria] = useState({
    priority: 'all',
    dueDate: 'all',
  });

  const [sortedTasks, setSortedTasks] = useState([]);
  const [sortOption, setSortOption] = useState('none');

  useEffect(() => {
    if (projectId) {
      fetchprojectTasks();
    } else {
      fetchAllTasks();
    }
    fetchEmployees();
  }, [projectId]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://outrageous-teal-purse.cyclic.app/employees');
      setEmployees(response.data.employees);
    } catch (error) {
      handleFetchError(error);
    }
  };

  const fetchAllTasks = async () => {
    try {
      const response = await axios.get(`https://outrageous-teal-purse.cyclic.app/all-tasks`);
      setTasks(response.data.tasks);
    } catch (error) {
      handleFetchError(error);
    }
  };

  const fetchprojectTasks = async () => {
    try {
      const response = await axios.get(`https://outrageous-teal-purse.cyclic.app/all-tasks/${projectId}`);
      setTasks(response.data.tasks);
    } catch (error) {
      handleFetchError(error);
    }
  };
  

  const handleFetchError = (error) => {
    const failMessage = error.response ? error.response.data.message : 'An error occurred';
    alert(failMessage);
    console.error(error);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'assignee') {
      setFormData({
        ...formData,
        assignee: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddTask = async (e) => {

    e.preventDefault();

    let url = "";

    if(projectId) {

      url = `https://outrageous-teal-purse.cyclic.app/add-task/${projectId}`;

    }

    else {

      url = `https://outrageous-teal-purse.cyclic.app/add-task`;
    }
  
    try {
      const response = await axios.post(url, formData);
      alert(response.data.message);

      if(projectId) {
        fetchprojectTasks();
      }

      else {
        fetchAllTasks();
      }
      
      handleClose();
    } catch (error) {
      handleFetchError(error);
    }
  };

  
  const handleCheck = async (taskId) => {
    const token = TOKEN;
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.patch(`https://outrageous-teal-purse.cyclic.app/edit-status/${taskId}`, {}, { headers });
      console.log(response);

      if(projectId) {
        fetchprojectTasks();
      }

      else {
        fetchAllTasks();
      }
    } catch (error) {
      handleFetchError(error);
    }
  };

  const handleProgressChange = async (taskId, value) => {
    const token = TOKEN;
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.patch(`https://outrageous-teal-purse.cyclic.app/edit-progress/${taskId}`, { progress: value }, { headers });
      console.log(response);

      if(projectId) {
        fetchprojectTasks();
      }

      else {
        fetchAllTasks();
      }
      
    } catch (error) {
      handleFetchError(error);
    }
  };

  useEffect(() => {

    let filteredTasks = tasks;
    if (filterCriteria.priority !== 'all') {
      filteredTasks = filteredTasks.filter((task) => task.priority === filterCriteria.priority);
    }

    if (sortOption !== 'none') {
      handleSort(sortOption, filteredTasks);
    } else {
      setSortedTasks(filteredTasks);
    }
  }, [tasks, filterCriteria, sortOption]);

  const handleSort = (criteria, tasksToSort) => {

    const sorted = [...tasksToSort];
  
    sorted.sort((a, b) => {
      if (criteria === 'priority') {
        return a.priority.localeCompare(b.priority);
      } else if (criteria === 'dueDate') {
        const dueDateA = new Date(a.dueDate);
        const dueDateB = new Date(b.dueDate);
        return dueDateA - dueDateB;
      } else if (criteria === 'progress') {
        return a.progress - b.progress;
      }
      return 0;
    });
  
    setSortedTasks(sorted);
  };
  

  const handleSortOptionChange = (option) => {
    setSortOption(option);
    handleSort(option, tasks);
  };

  return (
    
    <div>
      <div
        style={{
          backgroundImage: `url('/background_vector3.jpg')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          margin: '0',
          padding: '1%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(128, 0, 128, 0.7)',
            padding: '50px',
            borderRadius: '8px',
            marginBottom: '2%',
            color: '#FFFFFF',
            overflow: 'scroll',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <h2 style={{fontWeight: 'bolder'}}>Task Management</h2>
            
          </div>

          {/* Sort Button and Dropdown */}

          <div style={{ textAlign: 'right', marginTop: '10px' }}>

            <Dropdown>

              <Dropdown.Toggle variant="secondary" id="sortDropdown" className="btn btn-dark" style={{ backgroundColor: 'purple', marginBottom: '1%' }}>
                Sort
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSortOptionChange('priority')}>Priority</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortOptionChange('dueDate')}>Due Date</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortOptionChange('progress')}>Progress</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortOptionChange('none')}>None</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task) => (
                <Task
                  key={task._id}
                  taskId={task._id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  priority={task.priority}
                  assignee={task.assignee.firstName}
                  progress={task.progress}
                  status={task.completed}
                  handleProgressChange={handleProgressChange}
                  handleCheck={handleCheck}
                />
              ))}
            </tbody>
          </Table>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button
                  className="btn btn-dark"
                  style={{ backgroundColor: 'purple' }}
                  onClick={handleShow}
                >
                  Add Task
                </button>

          </div>

          

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddTask}>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" name="dueDate" className="form-control" value={formData.dueDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select name="priority" className="form-control" value={formData.priority} onChange={handleChange} required>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="form-group">

              <label htmlFor="assignee">Assignee</label>
      
              <select name = "assignee" className='form-control' value = {formData.assignee} onChange = {handleChange} required>

                {employees.map((employee) => (

                  <option value = {employee._id}>{employee.firstName}</option>
                ))}

              </select>

            </div>

            <div className='add-task-btn'>

          <motion.button
          type="submit"
          variant="primary"
          className="btn btn-dark mt-3"
          style={{ width: '30%', backgroundColor: 'purple' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShow}
        >
          submit
        </motion.button>

      </div>

          </form>
        </Modal.Body>
      </Modal>

        </div>
      </div>
    </div>
  );
};

export default TaskManagement;



