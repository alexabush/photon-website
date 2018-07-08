import React, { Component } from 'react';
import computer_model from '../../static/computer_model.jpg';
import hikingModel from '../../static/hikingModel.jpeg';

class Copy extends Component {
  state = {};
  render() {
    return (
      <div className="Copy">
        <div className="div__img-container">
          <img className="copy__img" src={hikingModel} alt="" />
          <img className="copy__img" src={hikingModel} alt="" />
          <img className="copy__img" src={hikingModel} alt="" />
          <img className="copy__img" src={hikingModel} alt="" />
          <img className="copy__img" src={hikingModel} alt="" />
          <img className="copy__img" src={hikingModel} alt="" />
        </div>
        <div>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            inventore odio.
          </h2>
          <p>
            Quisquam aperiam at minus! Blanditiis praesentium cumque velit
            eveniet officia amet architecto sit, enim nemo asperiores.
            Accusamus, quos libero.
          </p>
          <p>
            Quisquam aperiam at minus! Blanditiis praesentium cumque velit
            eveniet officia amet architecto sit, enim nemo asperiores.
            Accusamus, quos libero.
          </p>
          <p>
            Quisquam aperiam at minus! Blanditiis praesentium cumque velit
            eveniet officia amet architecto sit, enim nemo asperiores.
            Accusamus, quos libero.
          </p>
        </div>
      </div>
    );
  }
}

export default Copy;
