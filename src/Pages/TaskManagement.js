import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import CustomNavbar from '../Navbar/CustomNavbar';

const TaskManagement = () => {
 const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Task 1 Description', dueDate: '2022-05-01', priority: 'High', assignee: 'John', status: false, progress: 0 },
    { id: 2, title: 'Task 2', description: 'Task 2 Description', dueDate: '2022-05-10', priority: 'Low', assignee: 'Doe', status: false, progress: 0 },
 ]);

 const [show, setShow] = useState(false);
 const [formData, setFormData] = useState({ title: '', description: '', dueDate: '', priority: 'High', assignee: '' });

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: tasks.length + 1, ...formData, status: false, progress: 0 };
    setTasks([...tasks, newTask]);
    setFormData({ title: '', description: '', dueDate: '', priority: 'High', assignee: '' });
    handleClose();
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
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
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
          <form onSubmit={handleSubmit}>
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
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="assignee">Assignee</label>
              <input type="text" name="assignee" className="form-control" value={formData.assignee} onChange={handleChange} required />
            </div>

            <div className='add-task-btn'>

            <Button variant="primary" type="submit">
              Submit
            </Button>

      </div>

          </form>
        </Modal.Body>
      </Modal>

      <div className='add-task-btn'>

            <Button variant="primary" onClick={handleShow}>
                Add Task
            </Button>

      </div>

    </div>
 );
};

export default TaskManagement;

