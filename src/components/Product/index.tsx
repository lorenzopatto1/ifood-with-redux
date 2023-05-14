import { useDispatch } from "react-redux";
import { ProductInfos } from "../../data/products";
import { addProductToCart } from "../../redux/Cart/actions";
import {
  Container,
  ProductImage,
  ProductInfoContainer,
  ProductPrice,
} from "./styles";

export interface ProductProps {
  product: ProductInfos;
}

export const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <Container onClick={handleProductClick}>
      <ProductInfoContainer>
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <ProductPrice>
          <span>R$ {product.price}</span>
        </ProductPrice>
      </ProductInfoContainer>
      <ProductImage>
        <img src={product.imgURL} />
      </ProductImage>
    </Container>
  );
};
