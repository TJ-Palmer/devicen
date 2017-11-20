import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import pixel2 from '../../images/pixel2.png';

class Home extends Component {
  render() {
    const navBar = {
      background: this.props.user.theme.color
    };

    let devices = [];
    for (var i = 1; i < 13; i++) {
      devices.push(
        <div key={i} className="col-sm-3"><Link to={"./device/" + i}><img className="home-device-image" alt="pixel2" src={pixel2} width="100"></img></Link></div>
      );
    }

    return (
      <div className="home">
        <nav style={navBar} className="navbar fixed-top">
          <Link className="navbar-logo" to="/home">DEVICEN</Link>
          <Link className="navbar-nav" to="/account">Account</Link>
        </nav>
        <div className="container body">
          <div className="d-flex">
            <input name="search" className="searchbar" type="text" autoCapitalize="off" autoCorrect="off" placeholder="Search..."></input>
            <input name="add" className="btn-add-device" type="button" value="Add Device"></input>
          </div>
          <div className="container home-devices">
            <div className="row">
              {devices}
            </div>
          </div>
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

export default connect(mapStateToProps, null)(Home);
