import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { ProductProps } from "../Product";
import { ProductInfos, ProductItem, ProductQuantity } from "./styles";

import { useDispatch } from "react-redux"
import { decreaseItem, increaseItem, removeProductFromCart } from "../../redux/Cart/actions";

export const CartProductItem = ({ product }: ProductProps) => {
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(removeProductFromCart(product.id))
  }
  const handleIncreaseItem = () => {
    dispatch(increaseItem(product.id))
  }
  const handleDecreaseItem = () => {
    dispatch(decreaseItem(product.id))
  }

  return (
    <ProductItem>
      <ProductInfos>
        <span>{product.name}</span>
        <span>{product.price}</span>
        <ProductQuantity>
          <Minus size={18} weight="bold" fill="#ea1d2c" onClick={handleDecreaseItem} />
          <span>{product.quantity}</span>
          <Plus size={18} weight="bold" fill="#ea1d2c" onClick={handleIncreaseItem} />
          <Trash size={18} fill="#ea1d2c" onClick={handleRemoveItem} />
        </ProductQuantity>
      </ProductInfos>
      <img src={product.imgURL} />
    </ProductItem>
  );
};
