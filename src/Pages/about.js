import React from 'react';
import Base from '../Components/Base';


const About = () => {


  const textStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '100px',
    borderRadius: '8px',
    marginTop: '20px',
    marginBottom: '20px',
  };

  return (
    <Base>
      <div className="container mt-5" >
        <div className="row">
          <div className="col-md-8 offset-md-2" style={textStyle}>
            <h1 className="display-4 mb-4 text-center">About Us</h1>
            <p className="lead text-center">Welcome to our website!</p>
            <div className="text-justify">
              <p>
                <strong>Welcome to Our Journey</strong>
                <br />
                At CollaboraHub, we are more than just a platform; we're a community driven by passion and curiosity. Our journey began with a simple idea: to create a space where voices unite, ideas flourish, and stories resonate.
              </p>
              <p>
                <strong>Our Vision</strong>
                <br />
                We envision a world where collaboration transcends boundaries. Through the power of technology, we aim to facilitate seamless project management, task organization, and fruitful collaborations. Every user, every interaction on our platform is a testament to our commitment to fostering productive connections and efficient workspaces.
              </p>
              <p>
                <strong>Who We Are</strong>
                <br />
                We are a diverse team of innovators, creators, and collaborators - bound together by a shared love for innovation and productivity. From the conventional to the innovative, our platform reflects the myriad tools and functionalities that streamline and enhance collaborative work environments.
              </p>
              <p>
                <strong>Our Promise</strong>
                <br />
                With every feature we introduce, we strive to provide you with intuitive solutions, efficient task management, and a collaborative space that amplifies productivity. Whether you're a team or an individual seeking streamlined workflows, we're here to empower you and catalyze your journey towards success.
              </p>
              <p>
                <strong>Join Us</strong>
                <br />
                Embark on this journey with us. Explore, collaborate, and be part of a platform where efficiency thrives and collaborations flourish. Together, let's celebrate the power of efficient teamwork and the impact of seamless collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default About;
