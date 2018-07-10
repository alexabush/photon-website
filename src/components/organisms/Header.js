import React, { Component } from 'react';
import '../../App.css';
import Button from '../atoms/Button';

class Header extends Component {
  render() {
    return (
      <div className="Header div--flex-column">
        <i className="icon--cloud fas fa-cloud" />
        <h1 className="padding Header__h1">
          Hi, I'm Photon, another fine little freebie from HTML5 Up.
        </h1>
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
