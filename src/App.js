import React from 'react';
import About from './Pages/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectManagement from './Pages/project_management';
import TaskManagement from './Pages/TaskManagement';
import LoginPage from './Pages/login';
import SignupPage from './Pages/signup';
import Home from './Pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfileCard from './Pages/UserProfileCard';
import GetAllProjects from './Pages/all_projects';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectmanagement" element={<ProjectManagement />} />
        <Route path="/taskmanagement" element={<TaskManagement/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/userprofile" element={<UserProfileCard />} />
        <Route path="/allprojects" element={<GetAllProjects/>} />
      </Routes>
      
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
