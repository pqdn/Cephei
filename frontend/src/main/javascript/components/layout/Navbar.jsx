import React, {Component} from 'react';

import * as constants from '../../constants/constants';
import {connect} from 'react-redux';
@connect((state) => {
    return {

    }
  }
)
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-right" id="main-nav" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"       aria-expanded="false">
              <span className="sr-only">Меню</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right" id="nav-list">
              <li> <a href={constants.TAB_CLIENTS_HREF} id={1} className="main-nav-item"  title="menu1">
                menu1
              </a> </li>
              <li className="dropdown" id={2}>
                <a  className="dropdown-toggle main-nav-item" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">menu2 <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="main-nav-item" href={constants.TAB_CATALOG_PKO_HREF} id={2.1}  title="submenu">submenu 1</a>
                  </li>
                  <li><a className="main-nav-item" href={constants.TAB_CATALOG_RKO_HREF} id={2.2} title="submenu">submenu 2</a> </li>
                </ul>
              </li>
              <li> <a className="main-nav-item" href={constants.TAB_HELP_HREF} id={8} title="Помощь">?</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}