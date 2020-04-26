import * as actions from '../actions/productsInBasketActions';

export const initialState = {
  productsInBasket: []
}

export default function productsInBasketReducer(state = initialState, action) {
  debugger;
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
    default:
      return state
  }
}


