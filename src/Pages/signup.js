import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Base from '../Components/Base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEyeSlash, faEye,faLock,faUser  } from '@fortawesome/free-solid-svg-icons';

const SignupPage = () => {

  const textStyle = {
    backgroundColor: 'rgb(128,0,128,0.7)',
    backdropFilter: 'blur(5px)',
    padding: '50px',
    borderRadius: '8px',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', // Adding a subtle shadow for depth
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    // Placeholder function for Google login
    console.log('Perform Google login');
  };

  const handleFacebookLogin = () => {
    // Placeholder function for Facebook login
    console.log('Perform Facebook login');
  };

  return (
    <Base>
      <div className="container mt-5">
      <div className="container" style={textStyle}>
        <div className="row" >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="col-md-8 offset-md-2"
            style={{
              border: '2px solid transparent',
              padding: '45px',
              borderRadius: '5px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: 0, left: 0 }}
              animate={{ width:  '0.2%', left: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                background: 'white',
              }}
            />

            <motion.div
              initial={{ width: 0, right: 0 }}
              animate={{ width:  '0.2%', right: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                background: 'white',
              }}
            />

            <motion.div
              initial={{ height: 0, top: 0 }}
              animate={{ height:  '0.2%', top: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                background: 'white',
              }}
            />

            <motion.div
              initial={{ height: 0, bottom: 0 }}
              animate={{ height: '0.2%', bottom: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                background: 'white',
              }}
            />

<h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /> First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={{

   
                    border: 'none', // Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    width: '100%', // Set width to fill container
                    padding: '5px 10px', // Adjust padding
                    borderRadius: '10px',
                    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  }}
              
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /> Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{

   
                    border: 'none', // Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    width: '100%', // Set width to fill container
                    padding: '5px 10px', // Adjust padding
                    borderRadius: '10px',
                    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  }}
              
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{

   
                    border: 'none', // Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    width: '100%', // Set width to fill container
                    padding: '5px 10px', // Adjust padding
                    borderRadius: '10px',
                    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  }}
              
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <FontAwesomeIcon icon={faLock} style={{ marginRight: '10px' }} /> Password {/* Password icon */}
              </label>
              <div className="input-group">
                <input
                  type={formData.showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{

   
                    border: 'none', // Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    width: '90%', // Set width to fill container
                    padding: '5px 10px', // Adjust padding
                    borderRadius: '10px',
                    boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  }}
              
                  placeholder="Enter your password"
                  
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleTogglePassword}
                  style={{
                    border: 'none', // Hide button border
                    backgroundColor: 'transparent', // Transparent background
                    outline: 'none', // Remove outline when focused
                    padding: '0', // Adjust padding
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    
                  }}
                >
                  <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} style={{ color: 'white',  marginRight:'10px'  }} />
                </button>
              </div>
            </div>
            
            <div className="mb-3">
  <label htmlFor="confirmPassword" className="form-label">
    <FontAwesomeIcon icon={faLock} style={{ marginRight: '10px' }} /> Confirm Password {/* Password icon */}
  </label>
  <div className="input-group">
    <input
      type={formData.showConfirmPassword ? 'text' : 'password'}
      className="form-control"
      id="confirmPassword"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleInputChange}
      style={{

   
        border: 'none', // Hide default border
        borderBottom: 'none', // Show only bottom border
        backgroundColor: 'transparent', // Set transparent background
        outline: 'none', // Remove outline when focused
        color: 'white', // Input text color
        marginBottom: '5px', // Some spacing at the bottom
        width: '90%', // Set width to fill container
        padding: '5px 10px', // Adjust padding
        borderRadius: '10px',
        boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
      }}
  
      placeholder="Confirm your password"
      
    />
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setFormData({...formData, showConfirmPassword: !formData.showConfirmPassword})}
      style={{
        border: 'none', // Hide button border
        backgroundColor: 'transparent', // Transparent background
        outline: 'none', // Remove outline when focused
        padding: '0', // Adjust padding
        position: 'absolute',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        
      }}
    >
      <FontAwesomeIcon icon={formData.showConfirmPassword ? faEyeSlash : faEye}  style={{ color: 'white',marginRight:'10px' }}/>
    </button>
  </div>
</div>
              <motion.button
                type="submit"
                className="btn btn-dark mt-3 btn-purple w-100"
                style={{ backgroundColor: 'purple' ,  borderRadius: '10px', border:'none',
                boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)', }}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              >
                Signup
              </motion.button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>OR</p>

           {/* Google Login Button as motion.button */}
           <motion.button
              onClick={handleGoogleLogin}
              className="btn btn-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                
                width: '100%',
                marginTop: '10px',
                backgroundColor: ' #404040',
                color: 'white',
                border:'none',
                borderRadius: '10px',
                boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
              }}
            >
              <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px' , color:'white' }} />
              Continue with Google
            </motion.button>

            {/* Facebook Login Button as motion.button */}
            <motion.button
              onClick={handleFacebookLogin}
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ width: '100%', marginTop: '10px',  borderRadius: '10px',
              boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)' }}
            >
              <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px' }} />
              Continue with Facebook
            </motion.button>
          </motion.div>
        </div>

        </div>
      </div>
    </Base>
  );
};

export default SignupPage;
