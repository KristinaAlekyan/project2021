import {LOGIN} from "../actionTypes"

export const login = (email, password) => ({
    type: LOGIN,
    payload: {email, password}
});