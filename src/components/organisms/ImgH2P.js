import React, { Component } from 'react';
import computer_model from '../../static/computer_model.jpg';

class ImgH2P extends Component {
  state = {};
  render() {
    return (
      <div className="ImgH2P">
        <img src={computer_model} alt="" />
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Accusamus, voluptatem iure! Aliquid praesentium consequatur, eaque
            culpa nobis quisquam eveniet in sapiente possimus, maxime doloremque
            blanditiis nostrum. Harum repudiandae consectetur voluptatibus!
          </p>
        </div>
      </div>
    );
  }
}

export default ImgH2P;
