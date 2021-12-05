import {REMOVE_FROM_BASKET,REMOVE_FROM_WISHLIST,  LOGIN} from "../redux/actionTypes"

export const basketProductRemove= (removedId) => ({
    type: REMOVE_FROM_BASKET,
    payload: {removedId}
});

export const login = (content) => ({
    type: LOGIN,
    payload: {content}
});

export const  wishListProductRemove= (removedId) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: {removedId}
});


