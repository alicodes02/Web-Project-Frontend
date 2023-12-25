
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';



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
      await onDelete(project._id);
      console.log(project);

    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project');
    }
  };

  const handleEditSubmit = async () => {
    try {

      console.log(editData);
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
      <div className="project-card__top">
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: '10px', color:'white' }} />
        <h3 className="project-card__title">{project.projectName}</h3>
      </div>

      <div className="project-card__top2">
      <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px', color:'white' }}/>
      <p className="project-card__description">{project.description}</p>
      </div>
      <div className="project-card__details">
        <div className="project-card__category">
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px' }} />
           <p><strong>Category:</strong>{project.projectCategory}</p>
         </div>

       <div className="project-card__due-date">
        <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '10px', color:'white' }} />
        <p><strong>Due Date:</strong> {project.dueDate}</p>
       </div>

       <div className="project-card__assignment">
        <FontAwesomeIcon icon={faUserCheck} style={{ marginRight: '10px', color:'white' }}/>
        <p><strong>Assigned To:</strong> {project.assignTo}</p>
       </div>

       <div className="project-card__visibility">
        <p><strong>Visibility:</strong> {project.visibility}</p>
        {/* Additional project details */}
        </div>


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
      <Dialog open={openEditDialog} onClose={handleEditClose} className="custom-dialog">
        <DialogContent className="dialog-content">
          <TextField
              className="dialog-textfield"
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

          <TextField
  
              label="Category"
              name="projectCategory"
              value={editData.projectCategory}
              onChange={handleEditInputChange}
              fullWidth
          />

       <TextField
             label="Due Date"
             type="date" // Depending on the data type for due date (this assumes a date input)
             name="dueDate"
             value={editData.dueDate}
             onChange={handleEditInputChange}
             fullWidth
    // Add any necessary props for the due date field (e.g., inputProps, InputLabelProps)
       />

    <TextField
           label="Assigned To"
           name="assignTo"
           value={editData.assignTo}
           onChange={handleEditInputChange}
           fullWidth
    // Add any necessary props for the assigned to field
     />
  <TextField
    label="Visibility"
    name="visibility"
    value={editData.visibility}
    onChange={handleEditInputChange}
    fullWidth
    // Add any necessary props for the visibility field
  />
          {/* Add other fields as necessary */}
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleEditClose} className="dialog-button">Cancel</Button>
          <Button onClick={handleEditSubmit}className="dialog-button" color="primary">
            Update Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   );
  };
  
  export default Project;