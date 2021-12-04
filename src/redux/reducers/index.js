import {combineReducers} from "redux";
import basketReducer from "./basketReducer";
import loginHandler from "./loginHandler";

export default combineReducers({basketReducer, loginHandler});