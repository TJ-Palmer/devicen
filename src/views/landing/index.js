import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-overlay">
          <h2 className="landing-logo"><Link to="/">Devicen</Link></h2>
          <div className="mx-auto d-flex flex-column align-items-stretch landing-content">
            <div className="container landing-content">
              <h1 className="landing-slogan mx-auto">DEVICE STATS AT<br />YOUR FINGER TIPS</h1>
            </div>
            <Link className="mx-auto landing-btn" to="/register">SIGN UP</Link>
            <div className="landing-info">Have an account? <Link to="/login">Login!</Link></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
