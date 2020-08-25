import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ItemAnswerList.scss';

export default class ItemAnswerList extends Component {
  state = {
    status: '',
  };

  handleClick = () => {
    console.log('this.props.isGuessed: ', this.props.isGuessed);
    if (!this.props.isGuessed)
      this.setState({
        status:
          this.props.rightBird.name === this.props.name ? 'right' : 'error',
      });
    const isTouched = this.state.status;
    this.props.showBird(isTouched)
  };

  render() {
    return (
      <div
        className={`list-group-item d-flex align-items-center ${this.state.status}`}
        onClick={this.handleClick}
      >
        <div className="indicator"></div>
        <div className="bird-name">{this.props.name}</div>
      </div>
    );
  }
}

ItemAnswerList.propTypes = {
  name: PropTypes.string,
  showBird: PropTypes.func,
  rightBird: PropTypes.object,
  isGuessed: PropTypes.bool,
};
