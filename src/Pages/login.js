import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Base from '../Components/Base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEyeSlash, faEye ,faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../Navbar/CustomNavbar';
import './placeholder.css'

const LoginPage = () => {

  const navigate = useNavigate();

  const textStyle = {
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgb(128,0,128,0.7)',
    width:'80%',
    padding: '50px',
    borderRadius: '8px',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF'
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
  
    const handleSubmit = async (e) => {

      e.preventDefault();

      
      if (formData.email.trim() === '' || formData.password.trim() === '') 
      {

        toast.error('Please fill in both email and password fields.', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000, // Close the alert after 3 seconds
          style: { backgroundColor: '#990099', color: '#fff', fontSize: '14px', padding: '10px' },
        });
        return;
        
      }

      try {

        const response = await axios.post('http://localhost:3001/signin', formData);
  
        const message = response.data.message;
        var firstName = response.data.userfirstName;
        var userId = response.data.userId;
        var userEmail = response.data.userEmail;
        var token = response.data.token;

  
        alert(message);
        alert(`Welcome ${firstName}`);

        navigate('/dashboard', { state: { userId,firstName,userEmail,token } });

      }
  
      catch(error) {

        toast.error('Invalid email or password.',
         {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000, // Close the alert after 3 seconds
          style: { backgroundColor: '#990099', color: '#fff', fontSize: '14px', padding: '10px' },
        });
  
        console.log(error);
  
        if (error.response) {
          console.error('Error:', error.response.data.message);
        } else if (error.request) {
          console.error('Error: No response received');
        } else {
          console.error('Error:', error.message);
        }
      }
      
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

    <div>
      <CustomNavbar/>
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
              animate={{ width: '0.2%', left: 0 }}
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
              animate={{ width: '0.2%', right: 0 }}
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
              animate={{ height: '0.2%', top: 0 }}
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

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3" style={{ position: 'relative' }}>
  <label htmlFor="email" className="form-label">
    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Email {/* Email icon */}
  </label>
  <input
    type="email"
    className="form-control"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    style={{

   
      border:formData.email.length> 0 ? '1px solid white' : 'none',  // Hide default border
      borderBottom: 'none', // Show only bottom border
      backgroundColor: 'transparent', // Set transparent background
      outline: 'none', // Remove outline when focused
      color: 'white', // Input text color
      marginBottom: '5px', // Some spacing at the bottom
      width: '100%', // Set width to fill container
      height: '8vh',
      padding: '5px 10px', // Adjust padding
      borderRadius: '10px',
      boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
    }}

    placeholder="Enter your email"
  />
</div>

<div className="mb-3" style={{ position: 'relative' }}>
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
        border:formData.password.length> 0 ? '1px solid white' : 'none', // Hide default border
        borderBottom:  'none', // Show only bottom border
        backgroundColor: 'transparent', // Set transparent background
        outline: 'none', // Remove outline when focused
        color: 'white', // Input text color
        marginBottom: '5px', // Some spacing at the bottom
        height: '8vh',
        width: 'calc(100% - 38px)', // Adjust width considering button width
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
      <FontAwesomeIcon
        icon={formData.showPassword ? faEyeSlash : faEye}
        style={{ color: 'white'  , marginRight:'10px' , marginBottom:'5px'}}
      />
    </button>
  </div>
</div>
            <motion.button
  type="submit"
  className="btn btn-dark mt-3 w-100"
  style={{ backgroundColor: 'purple',  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)', border:'none' ,  borderRadius: '10px', }}
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
                border:'none',
                width: '100%',
                marginTop: '10px',
                backgroundColor: '#404040',
                color: 'white',
                borderRadius: '10px', // Optional: Add border radius
                boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                margin:'5px 0px',
                
                
              }}
            >
              <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px', color:'white' }} />
              Continue with Google
            </motion.button>

            {/* Facebook Login Button as motion.button */}
            <motion.button
              onClick={handleFacebookLogin}
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ width: '100%', marginTop: '10px',  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',  borderRadius: '10px',}}
            >
              <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px' }} />
              Continue with Facebook
            </motion.button>
          </motion.div>
        </div>
      </div>
      </div>
    </Base>
    </div>
    
  );
};

export default LoginPage;
