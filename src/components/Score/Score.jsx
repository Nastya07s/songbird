import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Score.scss";

export default class Score extends Component {
  render() {
    return (
      <div className="nav-link" href="#">
        Score: {this.props.score}
      </div>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number,
};
