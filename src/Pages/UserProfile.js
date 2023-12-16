import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css';
import UserProfileCard from './UserProfileCard';
import UserProfileDetails from './UserProfileDetails';
import CustomNavbar from '../Navbar/CustomNavbar';

const UserProfile = () => {
  return (

    <div>
    <CustomNavbar/>
    <div className="profile">
      <div className="row gutters">
        <UserProfileCard />
        <UserProfileDetails />
      </div>
    </div>
    </div>
    
  );
};

export default UserProfile;
