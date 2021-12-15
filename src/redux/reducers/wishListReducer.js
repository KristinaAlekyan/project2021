import {REMOVE_FROM_WISHLIST } from "../actionTypes";
import wishListData from "../../Data/wishList.json";

const initialState = {
    wishListProduct: JSON.parse(JSON.stringify(wishListData))
}

const wishListReducer = (state = initialState, action) =>{
    switch (action.type) {
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishListProduct: state.wishListProduct.filter((i) => i.id !== action.payload.removedId )
            }
        default:
            return state;
    }
};
export default wishListReducer;