import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Base from '../Components/Base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const MeetingScheduler = () => {
  const [proposedTime, setProposedTime] = useState('');
  const [scheduledMeetings, setScheduledMeetings] = useState([]);

  const handleTimeChange = (e) => {
    setProposedTime(e.target.value);
  };

  const scheduleMeeting = (e) => {
    e.preventDefault();
    // Simulated scheduling logic, just adding to the scheduledMeetings state
    setScheduledMeetings([...scheduledMeetings, proposedTime]);
    setProposedTime('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <Base>
      <motion.div initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          backgroundColor: 'rgb(128, 0, 128, 0.7)',
          width:'250vh',
          padding: '50px',
          borderRadius: '8px',
          marginTop: '30px',
          marginBottom: '30px',
          color: '#FFFFFF',
          display: 'flex',
       
          justifyContent: 'center', // Center vertically          
        }}
      >
        
      
      <motion.div
        
      >
        <h2>
          <FontAwesomeIcon icon={faClock} /> Meeting Scheduler
        </h2>
        <form onSubmit={scheduleMeeting}>
          <label>
            <FontAwesomeIcon icon={faClock} /> Proposed Time:
            <input type="datetime-local" value={proposedTime} onChange={handleTimeChange} />
          </label>
          <button type="submit">
            <FontAwesomeIcon icon={faClock} /> Schedule Meeting
          </button>
        </form>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          style={{ marginTop: '20px' }}
        >
          <h3>
            <FontAwesomeIcon icon={faClock} /> Scheduled Meetings:
          </h3>
          <ul>
            {scheduledMeetings.map((meeting, index) => (
              <motion.li key={index} variants={itemVariants}>
                <FontAwesomeIcon icon={faClock} /> {meeting}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      </motion.div>
    </Base>
  );
};

export default MeetingScheduler;
