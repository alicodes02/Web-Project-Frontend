import React, { useState, useEffect } from 'react';
import { Modal, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import CustomNavbar from '../Navbar/CustomNavbar';
import Task from './Task';

const TaskManagement = () => {
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

  useEffect(() => {
    fetchAllTasks();
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/employees');
      setEmployees(response.data.employees);
    } catch (error) {
      handleFetchError(error);
    }
  };

  const fetchAllTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/all-tasks');
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

    try {
      const response = await axios.post('http://localhost:3001/add-task', formData);
      alert(response.data.message);
      fetchAllTasks();
      handleClose();
    } catch (error) {
      handleFetchError(error);
    }
  };

  const handleCheck = async (taskId) => {
    const token = 'your_token_here'; // Replace with your actual token
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.patch(`http://localhost:3001/edit-status/${taskId}`, {}, { headers });
      console.log(response);
      fetchAllTasks();
    } catch (error) {
      handleFetchError(error);
    }
  };

  const handleProgressChange = async (taskId, value) => {
    const token = 'your_token_here'; // Replace with your actual token
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.patch(`http://localhost:3001/edit-progress/${taskId}`, { progress: value }, { headers });
      console.log(response);
      fetchAllTasks();
    } catch (error) {
      handleFetchError(error);
    }
  };

  useEffect(() => {
    let filteredTasks = tasks;
    if (filterCriteria.priority !== 'all') {
      filteredTasks = filteredTasks.filter((task) => task.priority === filterCriteria.priority);
    }
    // Add other filter conditions if needed

    // Apply sorting
    if (filterCriteria.dueDate !== 'all') {
      handleSort('dueDate');
    } else {
      setSortedTasks(filteredTasks);
    }
  }, [tasks, filterCriteria]);

  const handleFilterChange = (name, value) => {
    setFilterCriteria({
      ...filterCriteria,
      [name]: value,
    });
  };

  const handleSort = (criteria) => {
    // Implement sorting logic here
    const sorted = [...tasks];
    sorted.sort((a, b) => {
      // Example: Sorting by priority (high -> medium -> low)
      return a.priority.localeCompare(b.priority);
    });
    setSortedTasks(sorted);
  };

  return (
    <div>
      <CustomNavbar />
      <div
        style={{
          backgroundImage: `url('/background_vector3.jpg')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          margin: '0',
          padding: '1%',
          height: '100vh',
          display: 'flex',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgb(128,0,128,0.7)',
            padding: '50px',
            borderRadius: '8px',
            marginRight: '30px',
            marginLeft: '30px',
            marginTop: '30px',
            marginBottom: '2%',
            color: '#FFFFFF',
            overflow: 'scroll',
          }}
        >
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

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <motion.button
              type="submit"
              className="btn btn-dark mt-3"
              style={{ width: '30%', backgroundColor: 'purple' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShow}
            >
              Add Task
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;