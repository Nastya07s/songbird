import React, { Component } from 'react';

import './Header.scss';

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div className="navbar-brand">SONG<span className="bird-span">BIRD</span></div>

        <div className="" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link" href="#">Score: 0</div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
