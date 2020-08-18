import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Description.scss';
// import noneBird from './../../img/noneBird.jpg';

export default class Description extends Component {

  // showBird = (e, bird) => {
  //   console.log('bird', bird);
  // }

  render() {
    if (!this.props.bird) return null;
    const { image, name } = this.props.bird;
    return (
      <div className="col-md-6">
        <div className="bird-desc card">
          <div className="d-flex">
            <div className="random-bird__img">
              <img src={image} />
            </div>
            <div className="random-bird__info">
              <h3 className="">{name}</h3>
              <div className=""></div>
            </div>
          </div>
          <div className="bird-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam accusantium voluptatum eveniet iure odio quod! Libero delectus repudiandae molestias, consequatur voluptatum ducimus voluptates, temporibus excepturi laudantium commodi unde, beatae repellendus totam! Nostrum, suscipit voluptatem rerum mollitia neque corrupti sit, magnam pariatur a vel dolorem eaque obcaecati autem nulla fugit.
          </div>
        </div>
      </div>
    )
  }
}

Description.propTypes = {
  showBird: PropTypes.func,
  bird: PropTypes.object
};
