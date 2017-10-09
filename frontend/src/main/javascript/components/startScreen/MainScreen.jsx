import React, { Component } from "react";
import IconsWorkArea from "./IconsWorkArea.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../actions/index';


@connect((state) => {
    return {}
  }, (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
)
export default class MainScreen extends Component {
  render() {
    return (
      <div className="container-fluid">
        <IconsWorkArea {...this.props}/>
      </div>
    );
  }

}