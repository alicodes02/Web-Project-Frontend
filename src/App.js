import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/shared/Layout.js'
import Dashboard from './Pages/Dashboard.js'
import Message from './Pages/Message.js'
import MyCalendar from './Pages/Calendar.js'
import Meet from './Pages/Meet.js'
import Home from './Pages/home';
import About from './Pages/about';
import ProjectManagement from './Pages/project_management';
import TaskManagement from './Pages/TaskManagement';
import LoginPage from './Pages/login';
import SignupPage from './Pages/signup';
import UserProfileCard from './Pages/UserProfileCard';
import GetAllProjects from './Pages/all_projects';
import MeetingScheduler from './Pages/meeting_scheduler';
import TaskDetails from './Pages/TaskDetails';

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
        <Route path="/meetingscheduler" element={<MeetingScheduler />} />
        <Route path="/taskdetails" element={<TaskDetails/>} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<TaskManagement />} />
          <Route path="messages" element={<Message />} />
          <Route path="calendar" element={<MyCalendar />} />
          <Route path="meet" element={<Meet />} />
          <Route path="settings" element={<UserProfileCard />} />
          <Route path="support" element={<About />} />
        </Route>
      </Routes>
      
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
