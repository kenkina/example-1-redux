import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: state.cart.concat(action.product)
      }
    }
    case 'DELETE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product.id !== action.productId;
        })
      }
    }
    default:
      return state;
  }
}

export default createStore(reducer, { cart: [] });