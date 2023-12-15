import React from 'react';
import CustomNavbar from '../Navbar/CustomNavbar';

const Base = ({ children }) => {
  return (
    <div>
      {/* Common Header */}
      <CustomNavbar/>


      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Common Footer */}
      <footer>
       
      </footer>
    </div>
  );
};

export default Base;
