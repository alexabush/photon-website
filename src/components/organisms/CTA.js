import React, { Component } from 'react';
import photographer_model from '../../static/photographer_model.jpg';
import hikingModel from '../../static/hikingModel.jpeg';
import computer_model from '../../static/computer_model.jpg';
import ImgH2PBtn from './ImgH2PBtn';

class CTA extends Component {
  render() {
    return (
      <div className="CTA">
        <h2 className="CTA__h2 text-grey">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="short-border short-border--grey" />
        <p className="CTA__p text-grey">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="CTA__container">
          <ImgH2PBtn image={photographer_model} />
          <ImgH2PBtn image={hikingModel} />
          <ImgH2PBtn image={computer_model} />
        </div>
      </div>
    );
  }
}

export default CTA;
