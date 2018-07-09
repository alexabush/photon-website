import React, { Component } from 'react';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="Contact">
        <h2 className="Contact__h2 white">Ipsum feugiat consquat?</h2>
        <div className="short-border short-border--white" />
        <p className="Contact__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <button className="Button Button--white-background Contact__btn">
            sign up
          </button>
          <button className="Button Contact__btn">learn more</button>
        </div>
      </div>
    );
  }
}

export default Contact;
