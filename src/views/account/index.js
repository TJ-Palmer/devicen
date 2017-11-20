import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTheme } from '../../actions/actions_user';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.user.theme.color
    }
  }

  handleChange(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {
    this.props.updateTheme(this.state.color);
    event.preventDefault();
  }

  render() {
    const navBar = {
      background: this.props.user.theme.color
    };

    return (
      <div className="home">
        <nav style={navBar} className="navbar fixed-top">
          <Link className="navbar-logo" to="/home">DEVICEN</Link>
          <Link className="navbar-nav" to="/account">Account</Link>
        </nav>
        <div className="container body">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label className="form-label" htmlFor="color">Navbar Color</label>
            <div className="d-flex">
              <input className="searchbar" name="color" value={this.state.color} onChange={this.handleChange.bind(this)} />
              <input type="submit" className="btn-add-device" value="Save" />
            </div>
          </form>
          <br />
          <p>This takes in any type of css background. Try out some of these:</p>
            <ul>
              <li>#00aaff</li>
              <li>rgba(0, 255, 0, 0.5)</li>
              <li>linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)</li>
            </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateTheme: updateTheme,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
