import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { ProductProps } from "../Product";
import { ProductInfos, ProductItem, ProductQuantity } from "./styles";

import { useDispatch } from "react-redux"
import { removeProductFromCart } from "../../redux/Cart/actions";

export const CartProductItem = ({ product }: ProductProps) => {
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(removeProductFromCart(product.id))
  }

  return (
    <ProductItem>
      <ProductInfos>
        <span>{product.name}</span>
        <span>{product.price}</span>
        <ProductQuantity>
          <Minus size={18} weight="bold" fill="#ea1d2c" />
          <span>{product.quantity}</span>
          <Plus size={18} weight="bold" fill="#ea1d2c" />
          <Trash onClick={handleRemoveItem} fill="#ea1d2c"/>
        </ProductQuantity>
      </ProductInfos>
      <img src={product.imgURL} />
    </ProductItem>
  );
};
