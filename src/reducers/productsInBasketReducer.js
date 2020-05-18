import * as actions from '../actions/productsInBasketActions';

export const initialState = {
  productsInBasket: []
}

export default function productsInBasketReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PRODUCTS_IN_BASKET:
      return { ...state }
    case actions.UPDATE_PRODUCTS_IN_BASKET:
      return Object.assign({}, state, {
        productsInBasket: [
          ...state.productsInBasket,
          action.payload
        ]
      })
    case actions.DELETE_PRODUCT_FROM_BUSKET:
      return {
        productsInBasket: state.productsInBasket.filter((item, index) => index !== action.payload)
      }
    case actions.DELETE_ALL_PRODUCTS_FROM_BUSKET:
      return {
        productsInBasket: []
      }
    default:
      return state
  }
}


