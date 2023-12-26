import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/shared/Layout.js'
import Dashboard from './Pages/Dashboard.js'
import Message from './Pages/Message.js'
import MyCalendar from './Pages/Calendar.js'
import Home from './Pages/home';
import About from './Pages/about';
import ProjectManagement from './Pages/project_management';
import TaskManagement from './Pages/TaskManagement';
import LoginPage from './Pages/login';
import SignupPage from './Pages/signup';
import UserProfileCard from './Pages/UserProfileCard';
import GetAllProjects from './Pages/all_projects';
import MeetingManagement from './Pages/meeting_management.js';
import TaskDetails from './Pages/TaskDetails';
import Helpandsupport from './Pages/helpandsupport.js'
import GetAllMeetings from './Pages/all_meetings.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectmanagement" element={<ProjectManagement />} />
        <Route path="/taskmanagement" element={<TaskManagement />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/userprofile" element={<UserProfileCard />} />
        <Route path="/allprojects" element={<GetAllProjects />} />
        <Route path="/meetingscheduler" element={<GetAllMeetings />} />
        <Route path="/taskdetails" element={<TaskDetails/>} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<TaskManagement />} />
          <Route path="projectmanagement" element={<ProjectManagement />} />
          <Route path="allprojects" element={<GetAllProjects />} />
          <Route path="messages" element={<Message />} />
          <Route path="calendar" element={<MyCalendar />} />
          <Route path="userprofile" element={<UserProfileCard />} />
          <Route path="meet" element={<MeetingManagement />} />
          <Route path="manage-meetings" element={<GetAllMeetings />} />
          <Route path="settings" element={<UserProfileCard />} />
          <Route path="support" element={<Helpandsupport />} />
        </Route>
      </Routes>
      
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
