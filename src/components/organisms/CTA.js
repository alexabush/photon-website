import React, { Component } from 'react';
import photographer_model from '../../static/photographer_model.jpg';
import ImgH2PBtn from './ImgH2PBtn';

class CTA extends Component {
  state = {};
  render() {
    return (
      <div className="CTA">
        <h2 className="CTA__h2 text-grey">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="short-border" />
        <p className="CTA__p text-grey">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <ImgH2PBtn />
        <ImgH2PBtn />
        <ImgH2PBtn />
      </div>
    );
  }
}

export default CTA;
