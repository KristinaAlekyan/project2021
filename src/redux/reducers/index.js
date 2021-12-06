import {combineReducers} from "redux";
import basketReducer from "./basketReducer";
import wishListReducer from "./wishListReducer";
import loginHandler from "./loginHandler";

export default combineReducers ({
    basketReducer, 
    wishListReducer, 
    loginHandler
});