export type CartActionTypes = {
  ADD_PRODUCT: string,
  REMOVE_PRODUCT: string
  INCREASE_PRODUCT_QUANTITY: string;
  DECREASE_PRODUCT_QUANTITY: string;
}

export const cartActionTypes: CartActionTypes = {
  ADD_PRODUCT: 'cart/addProduct',
  REMOVE_PRODUCT: 'cart/removeProduct',
  INCREASE_PRODUCT_QUANTITY: 'cart/increaseProductQuantity',
  DECREASE_PRODUCT_QUANTITY: 'cart/decreaseProductQuantity',
}