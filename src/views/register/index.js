import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-overlay">
          <h2 className="landing-logo"><Link to="/">Devicen</Link></h2>
          <form className="h-100">
            <div className="mx-auto d-flex flex-column align-items-stretch landing-content">
                <div className="form container landing-content">
                    <label htmlFor="name" className="form-label">FULL NAME</label>
                    <input name="name" className="form-input" type="text" autoCapitalize="off" autoCorrect="off"></input>
                    <label htmlFor="email" className="form-label">EMAIL</label>
                    <input name="email" className="form-input" type="email" autoCapitalize="off" autoCorrect="off"></input>
                    <label htmlFor="password" className="form-label">PASSWORD</label>
                    <input name="password" className="form-input" type="password" autoCapitalize="off" autoCorrect="off"></input>
                    <label htmlFor="confirmpassword" className="form-label">CONFIRM PASSWORD</label>
                    <input name="confirmpassword" className="form-input" type="password" autoCapitalize="off" autoCorrect="off"></input>
                </div>
                <Link className="mx-auto landing-btn" to="/register">SIGN UP</Link>
              <div className="landing-info">Have an account? <Link to="/login">Login!</Link></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
