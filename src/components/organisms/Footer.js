import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="Footer">
        <ul>
          <i className="icon--small fab fa-twitter white" />
          <i className="icon--small fab fa-facebook-f white" />
          <i className="icon--small fab fa-instagram white" />
          <i className="icon--small fab fa-github white" />
          <i className="icon--small fas fa-envelope white" />
        </ul>
        <ul className="Footer__ul">
          <li className="Footer__li Footer__li--border white">Untitled</li>
          <li className="Footer__li Footer__li--border white">
            Design: HTML5 UP
          </li>
          <li className="Footer__li white">Demo Images: Unsplash</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
