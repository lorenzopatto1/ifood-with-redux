import { ProductInfos } from "../../data/products"
import { ApplicationState } from "../store"

export const selectProductsCount = (rootReducer:  ApplicationState) => {
  return rootReducer.cartReducer.products.reduce((acc: number, curr: ProductInfos) => acc + curr.quantity!, 0)
}

export const selectProductsTotalPrice = (rootReducer:  ApplicationState) => {
  return rootReducer.cartReducer.products.reduce((acc: number, curr: ProductInfos) => acc + curr.price * curr.quantity!, 0)
}