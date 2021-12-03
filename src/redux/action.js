import {REMOVE_FROM_BASKET, REMOVE_FROM_WISHLIST} from "./actionTypes"

export const  basketProductRemove= (removedId) => ({
    type: REMOVE_FROM_BASKET,
    payload: {removedId}
});

export const  wishListRemove= (removedId) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: {removedId}
});