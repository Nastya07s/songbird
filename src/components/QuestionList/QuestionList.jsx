import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemQuestionList from '../ItemQuestionList/ItemQuestionList.jsx';

import './QuestionList.scss';

export default class QuestionList extends Component {
  render() {
    const { stageNames, currentStage } = this.props;
    const itemsBody = stageNames.map((stageName, i) => {
      return (
        <ItemQuestionList
          key={stageName}
          stageName={stageName}
          isActiveStage={i === currentStage ? true : false}
        />
      );
    });
    return (
      <div className="pagination justify-content-between">{itemsBody}</div>
    );
  }
}

QuestionList.propTypes = {
  stageNames: PropTypes.array,
  currentStage: PropTypes.number,
};
