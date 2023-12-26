import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Base from '../Components/Base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const MeetingManagement = () => {

    const textStyle = {
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgb(128,0,128,0.7)',
        padding: '50px',
        borderRadius: '8px',
        width:'80%',
        marginTop: '30px',
        marginBottom: '30px',
        color: '#FFFFFF'
      };

  const [meetingData, setMeetingData] = useState({
    proposedTime: '',
    meetingDetails: {
      title: '',
      description: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({
      ...meetingData,
      [name]: value,
    });
  };

  const handleMeetingDetailsChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({
      ...meetingData,
      meetingDetails: {
        ...meetingData.meetingDetails,
        [name]: value,
      },
    });
  };

  const scheduleMeeting = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/meeting', meetingData);

      const message = response.data.message;
      alert(message);
    } catch (error) {
      const failMessage = error.response.data.message;
      alert(failMessage);
      console.error(error);
    }
  };

  return (
    <Base>
      <div className="container mt-5">
      <div className="container" style={textStyle}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-md-8 offset-md-2"
        >
          <h2>
            <FontAwesomeIcon icon={faClock} /> Schedule a Meeting
          </h2>
          <motion.form onSubmit={scheduleMeeting}>
            <div className="mb-3">
              <label htmlFor="proposedTime" className="form-label">
                <FontAwesomeIcon icon={faClock} /> Proposed Time:
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="proposedTime"
                name="proposedTime"
                value={meetingData.proposedTime}
                onChange={handleInputChange}
                style={{
                    border:meetingData.proposedTime.length> 0 ? '1px solid white' : 'none', // Hide default border
                    borderBottom:  'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    height: '8vh',
                    width: 'calc(100% - 38px)', // Adjust width considering button width
                    padding: '5px 10px', // Adjust padding
                    borderRadius: '10px',
                    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  }}
            
                  placeholder="Enter proposed time"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Meeting Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={meetingData.meetingDetails.title}
                onChange={handleMeetingDetailsChange}
                style={{
                    border:meetingData.meetingDetails.title.length> 0 ? '1px solid white' : 'none', // Hide default border
                    borderBottom:  'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    height: '8vh',
                    width: 'calc(100% - 38px)', // Adjust width considering button width
                    padding: '5px 10px', // Adjust padding
                    borderRadius: '10px',
                    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  }}
            
                  placeholder="Enter meeting title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={meetingData.meetingDetails.description}
                onChange={handleMeetingDetailsChange}
                style={{
                    border:meetingData.meetingDetails.description.length> 0 ? '1px solid white' : 'none', // Hide default border
                    borderBottom:  'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    height: '8vh',
                    width: 'calc(100% - 38px)', // Adjust width considering button width
                    padding: '5px 10px', // Adjust padding
                    borderRadius: '10px',
                    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  }}
            
                  placeholder="Enter project description"
              ></textarea>
            </div>
            <motion.button
                type="submit"
                className="btn btn-dark mt-3 w-50 mx-auto d-block"
                style={{ backgroundColor: 'purple' }}
                whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
            >
                   <FontAwesomeIcon icon={faClock} /> Schedule Meeting
             </motion.button>

          </motion.form>
        </motion.div>
      </div>
      </div>
    </Base>
  );
};

export default MeetingManagement;
