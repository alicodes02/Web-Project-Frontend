import React from 'react';
import CustomNavbar from '../Navbar/CustomNavbar';

const Base = ({ children }) => {
  const backgroundStyle = {
    backgroundImage: `url('/background_vector1.jpg')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    margin: '0', // Remove default margins
    padding: '1%', // Remove default padding
    height: '100vh', // Set the height to 100vh
    display: 'flex',
  };

  return (
    <div>
      {/* Common Header */}
      <CustomNavbar />

      {/* Main Content */}
      <main style={backgroundStyle}>
        {children}
      </main>

      {/* Common Footer */}
      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Base;
