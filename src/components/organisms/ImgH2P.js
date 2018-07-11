import React, { Component } from 'react';
import computer_model from '../../static/computer_model.jpg';

class ImgH2P extends Component {
  state = {};
  render() {
    return (
      <div className="ImgH2P">
        <img className="ImgH2P__img" src={computer_model} alt="" />
        <div className="ImgH2P__Text-Container">
          <h2 className="ImgH2P__h2 text-grey">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <div className="short-border short-border--grey short-border--left" />
          <p className="ImgH2P__p text-grey">
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
