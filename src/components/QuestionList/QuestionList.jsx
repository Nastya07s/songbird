import React, { Component } from 'react';
import ItemQuestionList from '../ItemQuestionList/ItemQuestionList.jsx';

import './QuestionList.scss';

export default class QuestionList extends Component {

  render() {
    return (
      <div className="pagination justify-content-between">
        <ItemQuestionList />
        <ItemQuestionList />
        <ItemQuestionList />
        <ItemQuestionList />
        <ItemQuestionList />
        <ItemQuestionList />
      </div>
    )
  }
}
