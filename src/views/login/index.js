import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <form className="h-100">
        <div className="mx-auto d-flex flex-column align-items-stretch landing-content">
            <div className="form container landing-content">
                <label htmlFor="email" className="form-label">EMAIL</label>
                <input name="email" className="form-input" type="email" autoCapitalize="off" autoCorrect="off"></input>
                <label htmlFor="password" className="form-label">PASSWORD</label>
                <input name="password" className="form-input" type="password" autoCapitalize="off" autoCorrect="off"></input>
            </div>
            <Link className="mx-auto landing-btn" to="/register">LOGIN</Link>
          <div className="landing-info">Have an account? <Link to="/register">Register!</Link></div>
        </div>
      </form>
    );
  }
}

export default Register;
