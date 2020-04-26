import { combineReducers } from 'redux';
import productsInBasketReducer from './productsInBasketReducer';

const rootReducer = combineReducers({
  productsInBasket: productsInBasketReducer,
})

export default rootReducer