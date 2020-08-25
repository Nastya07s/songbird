import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemAnswerList from '../ItemAnswerList/ItemAnswerList.jsx';

export default class AnswerList extends Component {
  // state = {
  //   rightBird: null,
  // }

  // componentDidMount = () => {
  //   this.setState({rightBird: this.props.rightBird})
  // }

  render() {
    // console.log('this.props.birdsData: ', this.props.birdsData);
    const bodyList = this.props.birdsData.map((bird) => {
      // console.log('bird: ', bird);
      // console.log('this.props.showBird: ', this.props.showBird);
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
    // console.log('bodyList: ', bodyList);
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
