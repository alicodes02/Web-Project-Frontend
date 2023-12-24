
import React, { useState } from 'react';
import './project.css'; // Create your own CSS file for styling
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog'; // Import Dialog component
import DialogTitle from '@mui/material/DialogTitle'; // Import DialogTitle component
import DialogContent from '@mui/material/DialogContent'; // Import DialogContent component
import DialogActions from '@mui/material/DialogActions'; // Import DialogActions component
import TextField from '@mui/material/TextField'; // Import TextField component
import Button from '@mui/material/Button'; // Import Button component


// Import other necessary components and icons as needed


const Project = ({ project, onDelete, onEdit }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editData, setEditData] = useState({ ...project });

  const handleEditOpen = () => {
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
  };

  const handleEditInputChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async () => {
    try {
      await onDelete(project.id);
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project');
    }
  };

  const handleEditSubmit = async () => {
    try {
      await onEdit(editData);
      handleEditClose();
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Error updating project');
    }
  };

  const handleEditIconClick = () => {
    handleEditOpen();
  };

  return (
    <div className="project-card">
      {/* Display project details */}
      <h3 className="project-card__title">{project.projectName}</h3>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__details">
        <p><strong>Category:</strong> {project.projectCategory}</p>
        <p><strong>Due Date:</strong> {project.dueDate}</p>
        <p><strong>Assigned To:</strong> {project.assignTo}</p>
        <p><strong>Visibility:</strong> {project.visibility}</p>
        {/* Additional project details */}
      </div>
  
      {/* Actions */}
      <div className="project-card__actions">
        <IconButton color="error" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" aria-label="edit" onClick={handleEditIconClick}>
          <EditIcon />
        </IconButton>
      </div>
  
      {/* Edit Project Dialog */}
      <Dialog open={openEditDialog} onClose={handleEditClose}>
        <DialogTitle>Edit Project</DialogTitle>
        <DialogContent>
          <TextField
            label="Project Name"
            name="projectName"
            value={editData.projectName}
            onChange={handleEditInputChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={editData.description}
            onChange={handleEditInputChange}
            fullWidth
            multiline
            rows={4}
          />
          {/* Add other fields as necessary */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleEditSubmit} color="primary">
            Update Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   );
  };
  
  export default Project;