import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemAnswerList from '../ItemAnswerList/ItemAnswerList.jsx';

export default class AnswerList extends Component {
  render() {
    const bodyList = this.props.birdsData.map((bird) => {
      return (
        <ItemAnswerList
          key={bird.id}
          name={bird.name}
          isGuessed={this.props.isGuessed}
          rightBird={this.props.rightBird}
          showBird={(isTouched) => this.props.showBird(bird, isTouched)}
        />
      );
    });

    return (
      <div className="col-md-6">
        <div className="item-list list-group">{bodyList}</div>
      </div>
    );
  }
}

AnswerList.propTypes = {
  birdsData: PropTypes.array,
  showBird: PropTypes.func,
  rightBird: PropTypes.object,
  isGuessed: PropTypes.bool,
};
