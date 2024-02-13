import React from 'react';
import Base from '../Components/Base';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import CustomNavbar from '../Navbar/CustomNavbar';
import './user.css';

const Home = () => {
  
  const textStyle = {
    backgroundColor: 'rgb(128,0,128,0.7)',
    backdropFilter: 'blur(5px)',
    padding: '100px',
    borderRadius: '8px',
    marginTop: '3.5%',
    color: '#FFFFFF',
  };
  
  return (

    <div>
      
      <CustomNavbar/>
      <Base>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center" style={textStyle}>
            <h1 className="display-4 mb-4">Welcome to CollaboraHub</h1>
            <FontAwesomeIcon icon={faUsers} />
            <p className="lead">
              Your go-to destination for streamlined collaboration and productivity.
            </p>
            <Link to="/Posts" className="btn btn-dark mt-3 btn-purple">
              Explore Collaborations
            </Link>
          </div>
        </div>
      </div>
    </Base>
    </div>

    
  );
};

export default Home;
