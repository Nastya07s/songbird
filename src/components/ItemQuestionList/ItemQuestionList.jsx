import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ItemQuestionList.scss';

export default class ItemQuestionList extends Component {
  render() {
    const { isActiveStage, stageName } = this.props;
    return (
      <div className={`page-item ${isActiveStage ? 'active' : ''}`}>
        <div className="page-link">{stageName}</div>
      </div>
    );
  }
}

ItemQuestionList.propTypes = {
  stageName: PropTypes.string,
  isActiveStage: PropTypes.bool,
};
