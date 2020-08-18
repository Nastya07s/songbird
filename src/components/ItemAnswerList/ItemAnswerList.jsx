import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ItemAnswerList.scss';

export default class ItemAnswerList extends Component {
  render() {
    return (
      <div className="list-group-item d-flex align-items-center" onClick={this.props.showBird}>
        <div className="indicator"></div>
        <div className="bird-name">{this.props.name}</div>
      </div>
    )
  }
}

ItemAnswerList.propTypes = {
  name: PropTypes.string,
  showBird: PropTypes.func,
}
