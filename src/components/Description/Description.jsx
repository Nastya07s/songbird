import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Player from '../Player/Player.jsx';

import './Description.scss';
// import noneBird from './../../img/noneBird.jpg';

export default class Description extends Component {

  createCard = () => {
    const { image, name, description, audio, species } = this.props.bird;
    return (
      <Fragment>
        <div className="d-flex">
          <div className="random-bird__img">
            <img src={image} />
          </div>
          <div className="random-bird__info">
            <h3 className="">{name}</h3>
            <p className="">{species}</p>
          </div>
        </div>
        <div className="bird__player">
          <Player audio={audio} />
        </div>
        <div className="">{description}</div>
      </Fragment>
    );
  };

  render() {
    const isBirdSelected = this.props.bird;
    const defaultText = (
      <p>
        Послушайте плеер. <br /> Выберите птицу из списка
      </p>
    );
    const content = isBirdSelected ? this.createCard() : defaultText;
    return (
      <div className="col-md-6">
        <div className="bird-desc card">
          {content}
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  showBird: PropTypes.func,
  bird: PropTypes.object,
};
