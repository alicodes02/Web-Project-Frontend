import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './meeting.css'

const Meeting = ({ meeting, onDelete, onEdit }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editData, setEditData] = useState({ ...meeting });


  const handleEditOpen = () => {
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
  };

  const handleeInputChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditInputChange = (e) => {
    setEditData({
      ...editData,
      meetingDetails: {
        ...editData.meetingDetails,
        [e.target.name]: e.target.value,
      },
    });
  };
  
  const handleEditSubmit = async () => {
    try {
      await onEdit(editData);
      handleEditClose();
    } catch (error) {
      console.error('Error updating meeting:', error);
      alert('Error updating meeting');
    }
  };

  const handleDelete = async () => {
    try {
      await onDelete(meeting._id);
    } catch (error) {
      console.error('Error deleting meeting:', error);
      alert('Error deleting meeting');
    }
  };

  const handleEditIconClick = () => {
    handleEditOpen();
  };

  return (
    <div className="meeting-card">
      <div className="meeting-card__top">
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: '10px', color: 'white' }} />
        <h3 className="meeting-card__title">{meeting.meetingDetails.title}</h3>
      </div>

      <div className="meeting-card__top2">
        <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px', color: 'white' }} />
        <p className="meeting-card__description">{meeting.meetingDetails.description}</p>
      </div>

      <div className="meeting-card__details">
      <div className="meeting-card__category">
            <FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} />
      <p>
         <strong>Proposed Time:</strong>
          {meeting.proposedTime}
      </p>
</div>

      </div>

      <div className="meeting-card__actions">
        <IconButton color="error" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" aria-label="edit" onClick={handleEditIconClick}>
          <EditIcon />
        </IconButton>
      </div>

      <Dialog open={openEditDialog} onClose={handleEditClose} className="custom-dialog">
        <DialogContent className="dialog-content">
          <TextField
            label="Proposed Time"
            type="datetime-local"
            name="proposedTime"
            value={editData.proposedTime}
            onChange={handleeInputChange}
            fullWidth
          />
          <TextField
            label="Meeting Title"
            name="title"
            value={editData.meetingDetails.title}
            onChange={handleEditInputChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={editData.meetingDetails.description}
            onChange={handleEditInputChange}
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleEditClose} className="dialog-button">Cancel</Button>
          <Button onClick={handleEditSubmit} className="dialog-button" color="primary">
            Update Meeting
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Meeting;
