import React, { Component } from 'react';

import './ItemAnswerList.scss';

export default class ItemAnswerList extends Component {

  render() {
    return (
      <div className="list-group-item d-flex align-items-center error">
        <div className="indicator"></div>
        <div className="bird-name">Ворона</div>
      </div>
    )
  }
}
