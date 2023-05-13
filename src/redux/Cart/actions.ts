import { ProductInfos } from "../../data/products";
import { cartActionTypes } from "./actionTypes";


export const addProductToCart = (payload: ProductInfos) => ({
    type: cartActionTypes.ADD_PRODUCT,
    payload
})
export const removeProductFromCart = (payload: number) => ({
    type: cartActionTypes.REMOVE_PRODUCT,
    payload
})