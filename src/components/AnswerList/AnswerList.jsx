import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemAnswerList from '../ItemAnswerList/ItemAnswerList.jsx';

export default class AnswerList extends Component {

  // state = {
  //   currentBird: null,
  // }

  render() {

    console.log('this.props.birdsData: ', this.props.birdsData);
    const bodyList = this.props.birdsData.map((bird) => {
      // console.log('bird: ', bird);
      return <ItemAnswerList key={bird.id} name={bird.name} showBird={() => this.props.showBird(bird)}/>
    })
    console.log('bodyList: ', bodyList);
    return (
      
      <div className="col-md-6">
        <div className="item-list list-group">
          {bodyList}
        </div>
      </div>
    )
  }
}

AnswerList.propTypes = {
  birdsData: PropTypes.array,
  showBird: PropTypes.func,
  currentBird: PropTypes.object,
};
