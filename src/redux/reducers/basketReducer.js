import { REMOVE_FROM_BASKET, REMOVE_FROM_WISHLIST } from "../actionTypes";
import basketData from "../../Data/basket.json";
import wishListData from "../../Data/wishList.json";

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
        default:
            return state;
    }
};
export default reducer;