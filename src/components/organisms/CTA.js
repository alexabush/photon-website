import React, { Component } from 'react';
import photographer_model from '../../static/photographer_model.jpg';

class CTA extends Component {
  state = {};
  render() {
    return (
      <div className="CTA">
        <h2 className="CTA__h2 text-grey">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="text-grey">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <img className="CTA__img" src={photographer_model} alt="" />
        <div className="CTA-Text-Container">
          <p className="CTA__p text-grey">
            Accusamus, voluptatem iure! Aliquid praesentium consequatur, eaque
            culpa nobis quisquam eveniet in sapiente possimus, maxime doloremque
            blanditiis nostrum. Harum repudiandae consectetur voluptatibus!
          </p>
        </div>
      </div>
    );
  }
}

export default CTA;
