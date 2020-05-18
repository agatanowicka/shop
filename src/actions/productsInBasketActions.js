export const GET_PRODUCTS_IN_BASKET = 'GET PRODUCTS IN BASKET';
export const UPDATE_PRODUCTS_IN_BASKET = 'UPDATE_PRODUCTS_IN_BASKET';
export const DELETE_PRODUCT_FROM_BUSKET = 'DELETE_PRODUCT_FROM_BUSKET';
export const DELETE_ALL_PRODUCTS_FROM_BUSKET = 'DELETE_ALL_PRODUCTS_FROM_BUSKET';

export const getProductsInBasket = () => ({
  type: GET_PRODUCTS_IN_BASKET
})

export const updateProductsInBasket = productsInBasket => ({
  type: UPDATE_PRODUCTS_IN_BASKET,
  payload: productsInBasket
})

export const   deleteProductFromBusket= index => ({
  type: DELETE_PRODUCT_FROM_BUSKET,
  payload: index
})
export const   deleteAllProductFromBusket= () => ({
  type: DELETE_ALL_PRODUCTS_FROM_BUSKET
})