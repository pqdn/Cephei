import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router'

@connect((state) => {
    return {

    }
  }
)
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Meta labs
            </Link>

          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <li><a>вход</a></li>
              <li><a>выход</a></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }

}