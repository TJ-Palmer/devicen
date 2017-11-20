import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDevice } from '../../actions/actions_devices';

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.user.theme.color
    }
  }

  componentDidMount() {
    this.props.fetchDevice(this.props.match.params.id);
  }

  renderDeviceInfo() {
    if (this.props.user.device.state.fetched) {
      return (
        <div>
          <p>Title: {this.props.user.device.info.title}</p>
          <p>Body: {this.props.user.device.info.body}</p>
          <p>Id: {this.props.user.device.info.id}</p>
        </div>
      );
    }
    else {
      return (
        <h3>Waiting for data</h3>
      );
    }
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
          <h3>Device: #{this.props.match.params.id}</h3>
          <small>This id is grabbed from the url</small>
          <hr />
          <h4>All this info is grabbed from a get request</h4>
          {this.renderDeviceInfo()}
          <small>Using: <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">jsonplaceholder.typicode.com</a> for data for posts</small>
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
    fetchDevice: fetchDevice,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Device);
