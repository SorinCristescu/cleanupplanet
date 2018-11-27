import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col s7 container-left">
            <h1 className="hero-text">CleanUp Day</h1>
            <h5 className="hero-text">
              Ocean plastic is a global problem, but some areas are more
              severely impacted than others.
              <br /> After identifying the global coast as a high-impact area,
              we built our cleanup community.
              <br /> Now we're cleaning the ocean and coastlines.
            </h5>
          </div>
          <div className="col s5">
            <h4 className="hero-text ">
              Find a cleanup location.
              <br /> Use our interactive map.
            </h4>

            <Link
              to="/signin"
              className="waves-effect waves-light btn-large blue accent-2 pulse">
              Join the wave
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
