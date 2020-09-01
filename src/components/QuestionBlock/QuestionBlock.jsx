import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Player from '../Player/Player.jsx';

import './QuestionBlock.scss';
import noneBird from './../../img/noneBird.jpg';

export default class QuestionBlock extends Component {

  render() {

    const { rightBird, isGuessed } = this.props;
    console.log('isGuessed: ', isGuessed);
    console.log('rightBird: ', rightBird);
    
    if (!rightBird) return null;

    const image = !isGuessed ? noneBird : rightBird.image;
    const name = !isGuessed ? '********' : rightBird.name;
    // const audio = isGuessed ? '' : rightBird.audio;
    const audio = rightBird.audio;
    console.log('rightBird.audio: ', rightBird.audio);

    // console.log(birdsData);
    return (
      <div className="random-bird jumbotron rounded d-flex">
        <div className="random-bird__img">
          <img src={image} />
        </div>
        <div className="random-bird__info w-75">
          <h3 className="">{name}</h3>
          <div className="random-bird__player">
            {/* <audio src={audio}></audio> */}
            <Player audio={audio} />
          </div>
        </div>
      </div>
    )
  }
}

QuestionBlock.propTypes = {
  rightBird: PropTypes.object,
  isGuessed: PropTypes.bool,
};
