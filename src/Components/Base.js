import React from 'react';
import CustomNavbar from '../Navbar/CustomNavbar';

const Base = ({ children }) => {


  const backgroundStyle = {
    backgroundImage: `url('/giphy3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '0', // Remove default margins
    padding: '0', // Remove default padding
    marginTop: '-50px',
    marginBottom: '-50px', // Adjust the negative margin with a unit (e.g., pixels)
  };

  return (
    <div>
      {/* Common Header */}
      <CustomNavbar/>


      {/* Main Content */}
      <main style={backgroundStyle}>
        {children}
      </main>

      {/* Common Footer */}
      <footer>
       
      </footer>
    </div>
  );
};

export default Base;
