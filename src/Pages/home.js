import React from 'react';
import Base from '../Components/Base';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Base>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h1 className="display-4 mb-4">Welcome to CollaboraHub</h1>
            <p className="lead">
              Your go-to destination for streamlined collaboration and productivity.
            </p>
            <Link to="/Posts" className="btn btn-success mt-3">
              Explore Collaborations
            </Link>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
