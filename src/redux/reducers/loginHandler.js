import {LOGIN} from "../actionTypes";
import users from "../../Data/users.json";
import {LOGIN_STATES} from "../../constants";

const initialState = LOGIN_STATES.NULL;

const loginHandler = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const user = users.filter(user =>
                user.email === action.payload.email &&
                user.password === action.payload.password
            );
            if (user.length === 0) {
                return LOGIN_STATES.FALSE;
            } else return LOGIN_STATES.TRUE;
        default:
            return state;
    }
}

export default loginHandler;