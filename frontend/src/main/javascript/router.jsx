import React from 'react'
import {Route, IndexRoute} from "react-router";

import App from './components/App.jsx';
import MainScreen from "./components/startScreen/MainScreen.jsx";
import PlaceEdit from "./components/botEditor/diagramEdit/PlaceEdit.jsx";

export const routes = (
    <div>
        <Route path='/' component={App}>
            {/*<IndexRoute component={MainScreen}/>*/}
            <IndexRoute component={PlaceEdit}/>
            <Route path='place' component={PlaceEdit}/>;
        </Route>
    </div>
);