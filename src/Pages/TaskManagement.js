import React, { useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import CustomNavbar from '../Navbar/CustomNavbar';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect } from 'react';

const TaskManagement = () => {

  const textStyle = {
    backgroundColor: 'rgb(128,0,128,0.7)',
    padding: '50px',
    borderRadius: '8px',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF'
  };

 const [tasks, setTasks] = useState([
    { id: 1, title: '', description: '', dueDate: '', priority: '', assignee: '', status: false, progress: 0 },
 ]);

 useEffect( () => {

    fetchAllTasks();
 }, []);

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
    // const newTask = { id: tasks.length + 1, ...formData, status: false, progress: 0 };
    // setTasks([...tasks, newTask]);
    // setFormData({ title: '', description: '', dueDate: '', priority: 'High', assignee: '' });
    // handleClose();

  try {

    const response =await axios.post('https://odd-jade-goshawk-vest.cyclic.app/add-task', formData);

    const message = response.data.message;
    alert(message);

    fetchAllTasks();
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

    const response = await axios.get('https://odd-jade-goshawk-vest.cyclic.app/all-tasks');

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
      task.id === id ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
 };

 const handleProgressChange = (id, value) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, progress: value } : task
    );
    setTasks(updatedTasks);
 };

 return (
    <div>

        <CustomNavbar/>
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
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.assignee}</td>
              <td>
                {task.status ? (
                 <p className="text-success">Completed</p>
                ) : (
                 <p className="text-danger">Pending</p>
                )}
              </td>
              <td>
                <input
                 type="range"
                 min="0"
                 max="100"
                 value={task.progress}
                 onChange={(e) => handleProgressChange(task.id, e.target.value)}
                />
              </td>
              <td>
                <input
                 type="checkbox"
                 checked={task.status}
                 onChange={() => handleCheck(task.id)}
                />
              </td>
            </tr>
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

                <option value = "65873b6c4833e5d57facce4a">Emp1</option>
                <option value = "6587416bb4dd99dc8ee87be1">Emp2</option>

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

