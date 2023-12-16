import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Base from '../Components/Base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEyeSlash, faEye,faLock,faUser  } from '@fortawesome/free-solid-svg-icons';

const SignupPage = () => {

  const textStyle = {
    backgroundColor: 'rgb(128,0,128,0.7)',
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
              border: '10px solid transparent',
              padding: '45px',
              borderRadius: '25px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: 0, left: 0 }}
              animate={{ width: '1%', left: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                background: 'black',
              }}
            />

            <motion.div
              initial={{ width: 0, right: 0 }}
              animate={{ width: '1%', right: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                background: 'black',
              }}
            />

            <motion.div
              initial={{ height: 0, top: 0 }}
              animate={{ height: '1%', top: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                background: 'black',
              }}
            />

            <motion.div
              initial={{ height: 0, bottom: 0 }}
              animate={{ height: '1%', bottom: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                background: 'black',
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
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleTogglePassword}
                >
                  <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} />
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
    />
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setFormData({...formData, showConfirmPassword: !formData.showConfirmPassword})}
    >
      <FontAwesomeIcon icon={formData.showConfirmPassword ? faEyeSlash : faEye} />
    </button>
  </div>
</div>
              <motion.button
                type="submit"
                className="btn btn-dark mt-3 btn-purple w-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Login
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
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: '1px solid black', // Add border style here
                borderRadius: '4px', // Optional: Add border radius
              }}
            >
              <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px' }} />
              Continue with Google
            </motion.button>

            {/* Facebook Login Button as motion.button */}
            <motion.button
              onClick={handleFacebookLogin}
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ width: '100%', marginTop: '10px' }}
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
