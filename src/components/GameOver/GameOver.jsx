import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './GameOver.scss';

export default class GameOver extends Component {

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3 text-center">Поздравляем!</h1>
        <p className="lead text-center">Вы набрали {this.props.score} баллов из 30 возможных</p>
        <p className="lead text-center">{this.props.score === 30 ? 'ЖЫВЕ БЕЛАРУСЬ!' : '*набери 30 баллов чтобы разблокировать ачивку'}</p>
        <hr className="my-4" />
        <button className="btn btn-warning game-over" onClick={this.props.startGame}>Попробовать еще раз!</button>
      </div>
    )
  }
}


GameOver.propTypes = {
  score: PropTypes.number,
  startGame: PropTypes.func,
}
