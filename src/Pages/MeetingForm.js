import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { motion } from 'framer-motion';
import './MeetingForm.css'; // Import your CSS file

const MeetingForm = ({
  proposedTime,
  setProposedTime,
  scheduleMeeting,
  meetingDetails,
  setMeetingDetails,
}) => {
  const handleTimeChange = (e) => {
    setProposedTime(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="meeting-form-container"
    >
      <h2>
        <FontAwesomeIcon icon={faClock} /> Meeting Scheduler
      </h2>
      <motion.form
        onSubmit={scheduleMeeting}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="form"
      >
        <FormGroup className="form-group">
          <Label>
            <FontAwesomeIcon icon={faClock} /> Proposed Time:
            <Input
              type="datetime-local"
              value={proposedTime}
              onChange={handleTimeChange}
              className="input-field"
            />
          </Label>
        </FormGroup>
        <FormGroup className="form-group">
          <Label>
            Meeting Title:
            <Input
              type="text"
              value={meetingDetails.title || ''}
              onChange={(e) => setMeetingDetails({ ...meetingDetails, title: e.target.value })}
              className="input-field"
            />
          </Label>
        </FormGroup>
        <FormGroup className="form-group">
          <Label>
            Description:
            <Input
              type="textarea"
              value={meetingDetails.description || ''}
              onChange={(e) => setMeetingDetails({ ...meetingDetails, description: e.target.value })}
              className="input-field"
            />
          </Label>
        </FormGroup>
        <Button type="submit" className="submit-button">
          <FontAwesomeIcon icon={faClock} /> Schedule Meeting
        </Button>
      </motion.form>
    </motion.div>
  );
};

export default MeetingForm;
