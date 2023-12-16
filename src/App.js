import React from 'react';
import About from './Pages/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectManagement from './Pages/project_management';
import TaskManagement from './Pages/TaskManagement';
import LoginPage from './Pages/login';
import SignupPage from './Pages/signup';
import Home from './Pages/home';
import UserProfile from './Pages/UserProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfileCard from './Pages/UserProfileCard';
import UserProfileDetails from './Pages/UserProfileDetails';






function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectmanagement" element={<ProjectManagement />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
<<<<<<< HEAD
        <Route path="/profiledetails" element={<UserProfileDetails/>} />
        <Route path="/profile" element={<UserProfileCard />} />
=======
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/taskmanagement" element={<TaskManagement />} />
>>>>>>> f0427d77181068f90da8999a65026f2ea6cc0a94
      </Routes>
      
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
