import { REMOVE_FROM_WISHLIST} from "../actionTypes"


export const  wishListProductRemove= (removedId) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: {removedId}
});