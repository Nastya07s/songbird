import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NextLevelButton.scss';

export default class NextLevelButton extends Component {
  render() {
    const isActive = this.props.isGuessed ? 'btn-warning' : '';
    return (
      <button
        type="button"
        className={`btn ${isActive} next-level`}
        onClick={() => this.props.goToNextLevel(isActive)}
      >
        Next Level
      </button>
    );
  }
}

NextLevelButton.propTypes = {
  isGuessed: PropTypes.bool,
  goToNextLevel: PropTypes.func,
};
