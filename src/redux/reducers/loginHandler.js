import {LOGIN} from "actionTypes";
import users from "../../Data/users.json";

const initialState = nall;

const loginHandler = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const user = users.filter(user => {
                user.email === action.payload.email &&
                user.password === action.payload.password
            });
            if (user.length === 0) {
                console.log("false");
                return false;
            } else return true;
        default:
            return state;
    }
}

export default loginHandler;