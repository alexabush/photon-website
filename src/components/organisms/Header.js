import React, { Component } from 'react';
import '../../App.css';
import Button from '../atoms/Button';

class Header extends Component {
  render() {
    return (
      <div className="Header div--flex-column">
        <h1 className="padding">Hi, my name is Photon</h1>
        <p className="padding">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          blanditiis molestiae.
        </p>
        <Button title="Discover" />
      </div>
    );
  }
}

export default Header;
