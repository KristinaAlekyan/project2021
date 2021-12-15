export const getLoginState = store => store.loginHandler;
export const getBasketItems = store => store.basketReducer.basketProduct;
export const getWishListItems = store => store.wishListReducer.wishListProduct;