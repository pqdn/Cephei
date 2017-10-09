import React from 'react'
import {Route, IndexRoute} from "react-router";

import App from './components/App.jsx';
import MainScreen from "./components/startScreen/MainScreen.jsx";

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={MainScreen}/>
    </Route>
  </div>
);