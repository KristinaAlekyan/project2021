import {REMOVE_FROM_BASKET} from "../actionTypes"

export const  basketProductRemove= (removedId) => ({
    type: REMOVE_FROM_BASKET,
    payload: {removedId}
});
