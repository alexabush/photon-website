import React, { Component } from 'react';
import computer_model from '../../static/computer_model.jpg';
import hikingModel from '../../static/hikingModel.jpeg';

class Copy extends Component {
  state = {};
  render() {
    return (
      <div className="Copy">
        <div className="Copy__background-image">
          <div className="Copy__img-container">
            <div className="icon__container">
              <div className="div--diamond" />
              <i class="icon fas fa-code" />
            </div>
            <i class="icon fas fa-bolt" />
            <i class="icon fas fa-camera-retro" />
            <i class="icon fas fa-cog" />
            <i class="icon fas fa-desktop" />
            <i class="icon fas fa-calendar-alt" />
          </div>
          <div className="Copy__text-container">
            <h2 className="Copy__h2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              inventore odio.
            </h2>
            <p className="padding">
              Quisquam aperiam at minus! Blanditiis praesentium cumque velit
              eveniet officia amet architecto sit, enim nemo asperiores.
              Accusamus, quos libero.
            </p>
            <p className="padding">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              eos alias voluptas ratione ab sequi voluptatum id porro, ex,
              deleniti nulla quisquam culpa quidem excepturi facilis fugit
              tempora. Sunt, accusantium?
            </p>
            <p className="padding">
              Quisquam aperiam at minus! Blanditiis praesentium cumque velit
              eveniet officia amet architecto sit, enim nemo asperiores.
              Accusamus, quos libero.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Copy;
