import { combineReducers } from 'redux';

import exampleReducer from './exampleReducer';
import diagramReducer from "./diagramReducer";

const rootReducer = combineReducers({
    exampleReducer,
    diagramReducer
});

export default rootReducer;