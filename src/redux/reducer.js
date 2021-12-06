import { REMOVE_FROM_BASKET, REMOVE_FROM_WISHLIST } from "./actionTypes";
import basketData from "../Data/basket.json";
import wishListData from "../Data/wishList.json";
import {LOGIN} from "./actionTypes";
import users from "../Data/users.json";
import {LOGIN_STATES} from "../constants";

const initialState = {
    basketProduct: JSON.parse(JSON.stringify(basketData)),
    wishListProduct: JSON.parse(JSON.stringify(wishListData))
}
  

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case REMOVE_FROM_BASKET:            
            return {
                ...state, 
                basketProduct: state.basketProduct.filter((i) => i.id !== action.payload.removedId )                
            }
        case REMOVE_FROM_WISHLIST:            
            return {
                ...state, 
                wishListProduct: state.wishListProduct.filter((i) => i.id !== action.payload.removedId )                
            }
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
};
export default reducer;
