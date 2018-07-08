import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types'; // ES6

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button>{this.props.title}</button>
      </div>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string
};

export default Button;
