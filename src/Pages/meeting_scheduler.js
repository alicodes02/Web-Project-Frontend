import React, { useState } from 'react';
import Base from '../Components/Base';

// Simulated data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  // ... add more users as needed
];

const projects = [
  { id: 101, name: 'Project A' },
  { id: 102, name: 'Project B' },
  { id: 103, name: 'Project C' },
  // ... add more projects as needed
];

const tasks = [
  { id: 201, title: 'Task 1', projectId: 101, userId: 1, deadline: '2023-12-25' },
  { id: 202, title: 'Task 2', projectId: 102, userId: 2, deadline: '2024-01-10' },
  { id: 203, title: 'Task 3', projectId: 103, userId: 3, deadline: '2024-02-05' },
  // ... add more tasks as needed
];

const meetings = [
  { id: 301, title: 'Meeting 1', projectId: 101, startTime: '2023-12-20T09:00', endTime: '2023-12-20T10:00', attendees: [1, 2] },
  { id: 302, title: 'Meeting 2', projectId: 102, startTime: '2024-01-05T14:00', endTime: '2024-01-05T15:30', attendees: [2, 3] },
  // ... add more meetings as needed
];

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

  return (
    <Base>
    <div>
      <h2>Meeting Scheduler</h2>
      <form onSubmit={scheduleMeeting}>
        <label>
          Proposed Time:
          <input type="datetime-local" value={proposedTime} onChange={handleTimeChange} />
        </label>
        <button type="submit">Schedule Meeting</button>
      </form>

      <div>
        <h3>Scheduled Meetings:</h3>
        <ul>
          {scheduledMeetings.map((meeting, index) => (
            <li key={index}>{meeting}</li>
          ))}
        </ul>
      </div>
    </div>
    </Base>
  );
};

export default MeetingScheduler;
