import {createStore} from "redux";
import basketReducer from "./reducer";

export const store = createStore(
    basketReducer
);


