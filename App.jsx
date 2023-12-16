import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserProfileCard from './UserProfileCard';
import UserProfileDetails from './UserProfileDetails';

const App = () => {
  return (
    <div className="container">
      <div className="row gutters">
        <UserProfileCard />
        <UserProfileDetails />
      </div>
    </div>
  );
};

export default App;
