import React, { Component } from 'react';
import Header from "./layout/Header.jsx";
import Navbar from "./layout/Navbar.jsx";
import { connect } from "react-redux";
import '../css/stormDiagram.css';
import '../css/style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="container-fluid">
          <Navbar/>
        </div>
        {this.props.children}
      </div>
    );
  }
}