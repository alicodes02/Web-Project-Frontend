// UserProfileCard.jsx
import React, { useRef, useState } from 'react';

const UserProfileCard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Display the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUploadClick = () => {
    
    alert('Profile picture uploaded successfully!');
  };

  return (
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile" onClick={handleProfilePicClick}>
              <div className="user-avatar">
                {profilePic ? (
                  <img src={profilePic} alt="Selected Profile Pic" />
                ) : (
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
            <div className="text-right">
              {profilePic && (
                <button type="button" className="btn btn-primary" onClick={handleUploadClick}>
                  Upload Profile Picture
                </button>
              )}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
