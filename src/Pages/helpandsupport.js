import React from 'react';
import Base from '../Components/Base';

const HelpAndSupport = () => {
  const textStyle = {
    backgroundColor: 'rgb(128, 0, 128, 0.7)',
    backdropFilter: 'blur(5px)',
    padding: '100px',
    borderRadius: '8px',
    marginTop: '20px',
    marginBottom: '20px',
    color: '#FFFFFF',
  };

  return (
    <div>
   
      <Base>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-md-2" style={textStyle}>
              <h1 className="display-4 mb-4 text-center">Help and Support</h1>
              <p className="lead text-center">We're here to assist you!</p>
              <div className="text-justify">
                <p>
                  <strong>How Can We Help?</strong>
                  <br />
                  At CollaboraHub, providing excellent support to our users is our priority. Whether you have questions about using our platform, encountering issues, or seeking guidance, we're here to assist you at every step.
                </p>
                <p>
                  <strong>Knowledge Base</strong>
                  <br />
                  Explore our comprehensive knowledge base to find answers to commonly asked questions, tutorials, and guides. Our collection of resources is designed to help you navigate through the features and functionalities of CollaboraHub effortlessly.
                </p>
                <p>
                  <strong>Contact Us</strong>
                  <br />
                  Should you need further assistance or encounter any issues not covered in our knowledge base, please feel free to reach out to our support team. You can contact us via email at support@collaborahub.com or fill out the contact form on our website.
                </p>
                <p>
                  <strong>Community Forums</strong>
                  <br />
                  Engage with our community forums to connect with other users, share experiences, and seek advice. Our forums are a great platform to interact, learn, and collaborate with like-minded individuals.
                </p>
                <p>
                  <strong>Feedback</strong>
                  <br />
                  Your feedback is invaluable to us. We appreciate your thoughts and suggestions for improving our platform. Don't hesitate to share your feedback with us; it helps us enhance the CollaboraHub experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default HelpAndSupport;
