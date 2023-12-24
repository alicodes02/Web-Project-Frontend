import React, { useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect } from 'react';
import Task from './Task';

const TaskManagement = () => {

  const textStyle = {
    backgroundColor: 'rgb(128,0,128,0.7)',
    padding: '50px',
    borderRadius: '8px',
    marginRight:'30px',
    marginLeft:'30px',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF'
  };

 const [tasks, setTasks] = useState([
    { id: 1, title: '', description: '', dueDate: '', priority: '', assignee: '', status: false, progress: 0 },
 ]);

 const [employees, setEmployees] = useState([]);

 useEffect( () => {

    fetchAllTasks();
    fetchEmployees();

 }, [], []);

 const fetchEmployees = async () => {

  try {

    const response = await axios.get('http://localhost:3001/employees');

    setEmployees(response.data.employees);
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

 const [show, setShow] = useState(false);
 const [formData, setFormData] = useState({ title: '', description: '', dueDate: '', priority: 'high', assignee: '65873b6c4833e5d57facce4a' });

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

 const handleAddTask = async(e) => {

  e.preventDefault();

  try {

    const response =await axios.post('http://localhost:3001/add-task', formData);

    const message = response.data.message;
    alert(message);

    fetchAllTasks();
    handleClose();
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

 const fetchAllTasks = async () => {

  try {

    const response = await axios.get('http://localhost:3001/all-tasks');

    setTasks(response.data.tasks);
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

 const handleCheck = (id) => {

    const updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, status: !task.status } : task
    );

    setTasks(updatedTasks);
 };

 const handleProgressChange = (id, value) => {

    console.log(value);

    const updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, progress: value } : task
    );
    setTasks(updatedTasks);
 };

 return (
    <div>

        {/* <CustomNavbar/> */}
     <div style={textStyle}>
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
          {tasks.map((task) => (

            <Task 

              key={task._id} 
              title = {task.title}
              description = {task.description}
              dueDate = {task.dueDate}
              priority = {task.priority}
              assignee = {task.assignee.firstName}
              handleProgressChange = {handleProgressChange}
              handleCheck = {handleCheck}  />

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
 );
};

export default TaskManagement;

