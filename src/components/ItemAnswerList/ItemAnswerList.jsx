import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ItemAnswerList.scss';

export default class ItemAnswerList extends Component {

  state = {
    status: '',
  }

  handleClick = () => {
    this.setState({status: this.props.rightBird.name === this.props.name ? 'right' : 'error'});
    this.props.showBird(this);
  }
  
  render() {
    return (
      <div className={`list-group-item d-flex align-items-center ${this.state.status}`} onClick={this.handleClick}>
        <div className="indicator"></div>
        <div className="bird-name">{this.props.name}</div>
      </div>
    )
  }
}

ItemAnswerList.propTypes = {
  name: PropTypes.string,
  showBird: PropTypes.func,
  rightBird: PropTypes.object,
}
