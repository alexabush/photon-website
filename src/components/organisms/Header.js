import React, { Component } from 'react';
import '../../App.css';
import Button from '../atoms/Button';

class Header extends Component {
  render() {
    return (
      <div className="Header div--flex-column">
        <h1>Hi, my name is Photon</h1>
        <p>
          A RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED UNDER THE
          CREATIVE COMMONS.
        </p>
        <Button title="Discover" />
      </div>
    );
  }
}

export default Header;
