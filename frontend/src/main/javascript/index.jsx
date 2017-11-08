import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/index'

import dataService from './services/dataService'
import {routes} from "./router.jsx";

let store = createStore(
  rootReducer,
  applyMiddleware(logger),
  applyMiddleware(dataService)
);

let appRender = ()=>{
  render(
    <Provider store={store}>
      <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
  );
};

appRender();



