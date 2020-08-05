import React, { Component } from 'react';

import './QuestionBlock.scss';
import noneBird from './../../img/noneBird.jpg';

export default class QuestionBlock extends Component {

  render() {
    return (
      <div className="random-bird jumbotron rounded d-flex">
        <div className="random-bird__img">
          <img src={noneBird} />
        </div>
        <div className="random-bird__info">
          <h3 className=""> ******** </h3>
          <div className=""></div>
        </div>
      </div>
    )
  }
}
