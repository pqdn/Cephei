import React from 'react'
import {Route, IndexRoute} from "react-router";

import App from './components/App.jsx';
import MainScreen from "./components/startScreen/MainScreen.jsx";
import PlaceEdit from "./components/botEditor/diagramEdit/WorkflowPlace.jsx";
import Editor from "./components/botEditor/Editor.jsx";

export const routes = (
  <div>
    <Route path='/' component={App}>
      {/*<IndexRoute component={MainScreen}/>*/}
      <IndexRoute component={Editor}/>
      <Route path='place' component={PlaceEdit}/>;
    </Route>
  </div>
);