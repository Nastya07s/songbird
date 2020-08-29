import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './Player.scss';

const Player = (props) => {
  console.log('props: ', props);

  return (
  <AudioPlayer
    showJumpControls={false}
    src={props.audio}
    layout='horizontal'
    autoPlayAfterSrcChange={false}
    // onPlay={(e) => console.log('onPlay', e)}
    // other props here
  />
)};

export default Player;

Player.propTypes = {
  audio: PropTypes.string,
};
