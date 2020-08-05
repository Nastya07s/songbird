import React, { Component } from 'react';
import ItemAnswerList from '../ItemAnswerList/ItemAnswerList.jsx';

export default class AnswerList extends Component {

  render() {
    return (
      
      <div className="col-md-6">
        <div className="item-list list-group">
          <ItemAnswerList />
          <ItemAnswerList />
          <ItemAnswerList />
          <ItemAnswerList />
          <ItemAnswerList />
          <ItemAnswerList />
        </div>
      </div>
    )
  }
}
