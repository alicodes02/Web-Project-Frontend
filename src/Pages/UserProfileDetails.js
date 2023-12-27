import React, { useState } from 'react';
import Axios from 'axios';

const UserProfileDetails = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [id]: value,
    }));
  };

//   const handleUpdateClick = () => {
//     // Check if any field is empty before showing the popup
//     const isAnyFieldEmpty = Object.values(userInfo).some((value) => value === '');
    
//     if (isAnyFieldEmpty) {
//       alert('Please fill in all fields before updating.');
//     } else {
//       setShowPopup(true);
//     }
// };

const handleUpdateClick = () => {
  // Extract data from the form fields (replace with actual form field IDs)
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('eMail').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const street = document.getElementById('Street').value;
  const city = document.getElementById('ciTy').value;
  const state = document.getElementById('sTate').value;
  const zipCode = document.getElementById('zIp').value;

  // Make API request to update user information
  Axios.post('http://localhost:3001/api/user/update', {
    userId: '65899dae51ce00e6e9abef81',
    fullName,
    email,
    phone,
    website,
    street,
    city,
    state,
    zipCode,
  })
    .then(response => {
      
      setShowPopup(true);
    })
    .catch(error => {
      
      console.error('Error updating user information:', error);
    });
};


  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-3 text-primary">Personal Details</h6>
              </div>

             
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter full name"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email ID"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone number"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="website">Website URL</label>
                  <input
                    type="url"
                    className="form-control"
                    id="website"
                    placeholder="Website url"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input
                    type="name"
                    className="form-control"
                    id="street"
                    placeholder="Enter Street"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="name"
                    className="form-control"
                    id="city"
                    placeholder="Enter City"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="Enter State"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    placeholder="Zip Code"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                  <button type="button" id="cancel" name="cancel" className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="button" id="update" name="update" className="btn btn-primary" onClick={handleUpdateClick}>
                    Update Info
                  </button>
                </div>
              </div>

              
              {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <span className="close" onClick={closePopup}>
        &times;
      </span>
      <h3>Info Saved Successfully!</h3>
      {Object.entries(userInfo).map(([key, value]) => (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
        </p>
      ))}
    </div>
  </div>
)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileDetails;
