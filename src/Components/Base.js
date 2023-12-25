import React from 'react';
import CustomNavbar from '../Navbar/CustomNavbar';

const Base = ({ children }) => {

  const backgroundStyle = {
    backgroundImage: `url('/background_vector1.jpg')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    margin: '0', 
    padding: '1%', 
    height: '100vh', 
    display: 'flex',
  };

  return (
    <div>
      {/* Common Header */}
      
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
