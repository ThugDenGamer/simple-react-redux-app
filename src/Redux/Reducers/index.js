// combining the reducers (we have one reducer)

import {combineReducers} from "redux";
import counterReducer from "./counterReducer"; 

const reducers = combineReducers({ counterReducer })

export default reducers