import { Reducer } from "redux";
import { cartActionTypes } from "./actionTypes";
import { ProductInfos, products } from "../../data/products";

export interface CartState {
  products: ProductInfos[];
  productsTotalPrice: number;
}

const INITIAL_STATE: CartState = {
  products: [],
  productsTotalPrice: 0,
};

export const cartReducer: Reducer<CartState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT: {
      const productsIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productsIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: (product.quantity! += 1) }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    }
    case cartActionTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload)
      }
    }

    default:
      return state;
  }
};
