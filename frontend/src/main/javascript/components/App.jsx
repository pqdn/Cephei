import React, { Component } from 'react';
import Header from "./layout/Header.jsx";
import Navbar from "./layout/Navbar.jsx";
import { connect } from "react-redux";
import * as PropTypes from 'prop-types';
import * as actions from '../actions/index';
import {bindActionCreators} from "redux";
import '../css/stormDiagram.css';
import '../css/style.css';

@connect((state) => {
    return {

    }
  }, (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
)
export default class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // setInterval(
    //   this.props.actions.updateCurrentDT,
    //   30000,
    // )
  }

  render() {

    return (
      <div>
        <Header {...this.props} />
        <div className="container-fluid">
          <Navbar {...this.props.actions} />
          <div></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}