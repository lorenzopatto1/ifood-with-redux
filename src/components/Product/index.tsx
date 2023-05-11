import { restaurant } from "../../data/restaurant"
import { Container, ProductItem, ProductInfoContainer, ProductImage, ProductPrice } from "./styles"


export const Products = () => {
  return (
    <Container>
      {restaurant.products.map(product => {
        return (
          <ProductItem key={product.id}>
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
          </ProductItem>
        )
      })}
    </Container>
  )
}