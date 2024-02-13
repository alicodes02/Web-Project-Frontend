import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meeting from './Meet'; 

const GetAllMeetings = () => {

    const backgroundStyle = {
        backgroundImage: `url('/background_vector1.jpg')`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        margin: '0', 
        padding: '1%', 
        height: '100vh', 
        display: 'flex',
      };

  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/meetings`);
        setMeetings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching meetings:', error);
      }
    };

    fetchMeetings();
  }, []);

  const handleAPIError = (error) => {
    console.error('API Error:', error);
    alert('An error occurred while fetching data');
  };

  const handleDeleteMeeting = async (meetingId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/delete-meeting/${meetingId}`);
      setMeetings((prevMeetings) => prevMeetings.filter((meeting) => meeting._id !== meetingId));
    } catch (error) {
      handleAPIError(error);
    }
  };

  const handleEditMeeting = async (updatedMeeting) => {
    try {
      const updatedMeetings = meetings.map((meeting) =>
        meeting._id === updatedMeeting._id ? updatedMeeting : meeting
      );
      await axios.patch(`${process.env.REACT_APP_URL}/update-meeting/${updatedMeeting._id}`, updatedMeeting);
      setMeetings(updatedMeetings);
    } catch (error) {
      handleAPIError(error);
    }
  };

  return (
    <div>
       <main style={backgroundStyle}>
        <div className="container mt-5" >
      {meetings.map((meeting) => (
        <Meeting
          key={meeting.id}
          meeting={meeting}
          onDelete={handleDeleteMeeting}
          onEdit={handleEditMeeting}
        />
      ))}
     </div>


</main>

<footer>
</footer>
</div>
  );
};

export default GetAllMeetings;
