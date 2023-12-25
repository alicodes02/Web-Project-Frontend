import React, { useState } from 'react';
import { motion } from 'framer-motion';
//import Base from '../Components/Base';
import MeetingForm from './MeetingForm';
import MeetingList from './MeetingList';

const Meet = () => {
  const [proposedTime, setProposedTime] = useState('');
  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [meetingDetails, setMeetingDetails] = useState({});

  const handleRadioChange = (index) => {
    setSelectedMeeting(index);
  };

  const deleteMeeting = () => {
    if (selectedMeeting !== null) {
      if (window.confirm("Are you sure you want to delete this meeting?")) {
        const updatedMeetings = scheduledMeetings.filter((_, index) => index !== selectedMeeting);
        setScheduledMeetings(updatedMeetings);
        setSelectedMeeting(null);
      }
    }
  };

  const scheduleMeeting = (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    if (proposedTime <= currentTime) {
      alert("Please select a time in the future.");
      return;
    }
    setScheduledMeetings([...scheduledMeetings, proposedTime]);
    setProposedTime('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    //<Base>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        background: 'rgba(128, 0, 128, 0.7)',
        width: '171vh',
        padding: '50px',
        borderRadius: '8px',
        marginBottom: '30px',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      
        <MeetingForm
          proposedTime={proposedTime}
          setProposedTime={setProposedTime}
          scheduleMeeting={scheduleMeeting}
          meetingDetails={meetingDetails}
          setMeetingDetails={setMeetingDetails}
        />
        <MeetingList
          scheduledMeetings={scheduledMeetings}
          selectedMeeting={selectedMeeting}
          handleRadioChange={handleRadioChange}
          deleteMeeting={deleteMeeting}
        />
     
    </motion.div>
    //</Base>
  );
};

export default Meet;
