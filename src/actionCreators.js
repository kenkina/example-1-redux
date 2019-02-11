export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    product
  };
}

export const removeFromCart = (productId) => {
  return {
    type: 'DELETE_FROM_CART',
    productId: productId
  };
}