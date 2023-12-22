import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem} from 'reactstrap';

import { motion } from 'framer-motion';
import './MeetingList.css'; // Import your CSS file

const MeetingList = ({
  scheduledMeetings,
  selectedMeeting,
  handleRadioChange,
  deleteMeeting,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="meeting-list-container"
    >
      <h3>
        <FontAwesomeIcon icon={faClock} /> Scheduled Meetings:
      </h3>
      <ListGroup className="meeting-list">
        {scheduledMeetings.map((meeting, index) => (
          <ListGroupItem key={index} className="meeting-item">
            <label className="radio-label">
              <input
                type="radio"
                value={index}
                checked={selectedMeeting === index}
                onChange={() => handleRadioChange(index)}
                className="radio-input"
              />
              {new Date(meeting).toLocaleString()}
            </label>
          </ListGroupItem>
        ))}
      </ListGroup>
      <motion.button
          type="submit"
          className="btn btn-dark mt-3 w-100"
          style={{ backgroundColor: 'purple' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
         Delete Selected Meeting
        </motion.button>
    </motion.div>
  );
};

export default MeetingList;
