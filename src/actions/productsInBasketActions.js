export const GET_PRODUCTS_IN_BASKET = 'GET PRODUCTS IN BASKET'
export const UPDATE_PRODUCTS_IN_BASKET = 'UPDATE_PRODUCTS_IN_BASKET'

export const getProductsInBasket = () => ({
    type: GET_PRODUCTS_IN_BASKET
  })
  
  export const updateProductsInBasket = productsInBasket => ({
    type: UPDATE_PRODUCTS_IN_BASKET,
    payload: productsInBasket
  })
  