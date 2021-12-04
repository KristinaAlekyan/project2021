import { REMOVE_FROM_BASKET } from "../actionTypes";
import Data from "../../components/WishListContainer/wishList.json";

const initialState = {
    basketProduct: JSON.parse(JSON.stringify(Data))
}

const basketReducer = (state = initialState, action) =>{
    switch (action.type) {
        case REMOVE_FROM_BASKET:            
            return {
                ...state,
                basketProduct: state.basketProduct.filter((i) => i.id !== action.payload.removedId )
            }
        default:
            return state;
    }
};

export default basketReducer;