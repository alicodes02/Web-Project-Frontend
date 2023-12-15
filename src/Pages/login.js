import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Base from '../Components/Base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; 

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
        <div className="row">
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
                background: 'purple',
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
                background: 'purple',
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
                background: 'purple',
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
                background: 'purple',
              }}
            />

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Email {/* Email icon */}
                  Email
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
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
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
    </Base>
  );
};

export default LoginPage;
