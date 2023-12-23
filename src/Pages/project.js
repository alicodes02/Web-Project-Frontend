import React, { useState } from 'react';
import './project.css'; // Create your own CSS file for styling
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
// Import other necessary components and icons as needed

const ProjectManagement = (props) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editData, setEditData] = useState({
    projectName: props.projectName,
    description: props.description,
    // Add other fields as needed
  });

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
      const response = await axios.delete(`http://localhost:3000/delete-project/${props.id}`, {
        headers: {
          Authorization: `Bearer ${props.usertoken}`,
        },
      });

      console.log('Project deleted successfully:', response.data);

      if (props.onDelete) {
        props.onDelete();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project');
    }
  };

  const handleEditSubmit = async () => {
    try {
      const updatedProject = {
        projectName: editData.projectName,
        description: editData.description,
        // Add other fields as needed
      };

      const response = await axios.put(`http://localhost:3000/update-project/${props.id}`, updatedProject, {
        headers: {
          Authorization: `Bearer ${props.usertoken}`,
        },
      });

      console.log('Project updated successfully:', response.data);

      if (props.onEdit) {
        props.onEdit();
      }

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
      <h3 className="project-card__title">{props.projectName}</h3>
      <p className="project-card__description">{props.description}</p>
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

export default ProjectManagement;
