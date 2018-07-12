import React, { Component } from 'react';

class ImgH2PBtn extends Component {
  state = {};
  render() {
    return (
      <div className="ImgH2PBtn">
        <div className="ImgH2PBtn__img-container">
          <img className="ImgH2PBtn__img" src={this.props.image} alt="" />
        </div>
        <div className="ImgH2PBtn__Text-Container">
          <h2 className="ImgH2P__h2 ImgH2PBtn__h2 text-grey">
            Distinctio deleniti ducimust.
          </h2>
          <p className="ImgH2P__p text-grey">
            Accusamus, voluptatem iure! Aliquid praesentium consequatur.
          </p>
          <button className="Button--grey">More</button>
        </div>
      </div>
    );
  }
}

export default ImgH2PBtn;
