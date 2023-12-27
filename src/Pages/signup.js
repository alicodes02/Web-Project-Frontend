import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Base from '../Components/Base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEyeSlash, faEye,faLock,faUser,  } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import './signup.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../Navbar/CustomNavbar';
import './placeholder.css'

const SignupPage = () => {

  const navigate = useNavigate();

  const textStyle = {
    backgroundColor: 'rgb(128,0,128,0.7)',
    backdropFilter: 'blur(5px)',
    padding: '50px',
    borderRadius: '8px',
    width:'85%',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  };

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email: '',
    password: '',
    confirmPassword:'',
    role: 'manager',
    showPassword: false,
  });

  const handleInputChange = (e) => {

    const { name, value } = e.target;
  
    if (name === 'role') {

      setFormData({
        ...formData,
        role: value,
      });

    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleTogglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };


  const handleSubmit = async(e) => {

    e.preventDefault();

    if (formData.firstName.trim() === '' || formData.lastName.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '' || formData.confirmPassword.trim() === '' || formData.role.trim() === '' ) 
    {

      toast.error('Please fill in all input fields.', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000, // Close the alert after 3 seconds
        style: { backgroundColor: '#990099', color: '#fff', fontSize: '14px', padding: '10px' },
      });
      return;
      
    }

    if (formData.password !==  formData.confirmPassword) 
    {

      toast.error('Password does not match!', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000, // Close the alert after 3 seconds
        style: { backgroundColor: '#990099', color: '#fff', fontSize: '14px', padding: '10px' },
      });
      return;
      
    }

    


    try {

      const response = await axios.post('https://outrageous-teal-purse.cyclic.app/signup', formData);

        const message = response.data.message;
        var firstName = response.data.userfirstName;
        var userId = response.data.userId;
        var userEmail = response.data.userEmail;
        var token = response.data.token;

        toast.success(`Successfully signed up!`, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000,
          style: {
            backgroundColor: 'purple',
            color: '#fff',
            fontSize: '14px',
            padding: '10px',
          },
        });

        alert(message);
        alert(`Welcome ${firstName}`);

        
    }

    catch(error) {

        const failMessage = error.response.data.message;
  
        alert(failMessage);
  
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

   
                    border:formData.firstName.length> 0 ? '1px solid white' : 'none',// Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    height: '8vh',
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

   
                    border:formData.lastName.length> 0 ? '1px solid white' : 'none', // Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    height: '8vh',
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

   
                    border:formData.email.length> 0 ? '1px solid white' : 'none', // Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    height: '8vh',
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
                <label htmlFor="role" className="form-label">
                  <FontAwesomeIcon icon={faUserShield} style={{ marginRight: '10px' }} /> Role
                </label>

                <select className="form-control" id="role" name="role" value={formData.role} onChange={handleInputChange}
                
                style={{

                  border:formData.role? '1px solid white' : 'none', // Hide default border
                  borderBottom: 'none', // Show only bottom border
                  backgroundColor: 'transparent', // Set transparent background
                  outline: 'none', // Remove outline when focused
                  color:formData.role.length> 0 ?'white': '#404040', // Input text color
                  marginBottom: '5px', // Some spacing at the bottom
                  height: '8vh',
                  width: '100%', // Set width to fill container
                  padding: '5px 10px', // Adjust padding
                  borderRadius: '10px',
                  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.4)',
                  
                }}
            
                placeholder="Enter your role"
                
                >
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>

                </select>
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

   
                    border:formData.password.length> 0 ? '1px solid white' : 'none',// Hide default border
                    borderBottom: 'none', // Show only bottom border
                    backgroundColor: 'transparent', // Set transparent background
                    outline: 'none', // Remove outline when focused
                    color: 'white', // Input text color
                    marginBottom: '5px', // Some spacing at the bottom
                    width: '90%', // Set width to fill container
                    height: '8vh',
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
                  <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} style={{ color: 'white',  marginRight:'10px'  ,marginBottom:'5px'}} />
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

   
        border:formData.confirmPassword.length> 0 ? '1px solid white' : 'none', // Hide default border
        borderBottom: 'none', // Show only bottom border
        backgroundColor: 'transparent', // Set transparent background
        outline: 'none', // Remove outline when focused
        color: 'white', // Input text color
        marginBottom: '5px', // Some spacing at the bottom
        height: '8vh',
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
      <FontAwesomeIcon icon={formData.showConfirmPassword ? faEyeSlash : faEye}  style={{ color: 'white',marginRight:'10px' ,marginBottom:'5px'}}/>
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
    </div>

  );
};

export default SignupPage;
