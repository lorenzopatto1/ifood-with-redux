import { Bag, X } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import {
  CartEmptyInfos, CartEmptySVG, Container,
  Content,
  ProductsTotalPriceContainer,
  Total
} from "./styles";

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { ApplicationState } from "../../redux/store";
import { CartProductItem } from "../CartProductItem";
import { selectProductsTotalPrice } from "../../redux/Cart/cartSelectors";

interface CartZoneProps {
  cartIsOpen: boolean;
  toggleDrawer: () => void;
}

export const CartZone = ({ cartIsOpen, toggleDrawer }: CartZoneProps) => {
  const { products } = useSelector(
    (rootReducer: ApplicationState) => rootReducer.cartReducer
  );
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Drawer
      open={cartIsOpen}
      onClose={toggleDrawer}
      direction="right"
      overlayOpacity={0}
      size={'300px'}
    >
      <Container>
        <X onClick={toggleDrawer} size={17.5} weight="bold" fill="#ea1d2c" />
        {products.length > 0 ? (
          products.map((product) => <CartProductItem product={product} />)
        ) : (
          <CartEmptyInfos>
            <CartEmptySVG>
              <Bag size={120} fill="#ea1d2c" />
            </CartEmptySVG>
            <span>Sua sacola está vazia</span>
            <span>Adicione itens</span>
          </CartEmptyInfos>
        )}
     {products.length > 0 && (
       <ProductsTotalPriceContainer>
       <Content>
         <Total>
           <span>Total</span>
           <span>R$ {productsTotalPrice.toFixed(2)}</span>
         </Total>
         <button>Escolher forma de pagamento</button>
       </Content>
     </ProductsTotalPriceContainer>
     )}
      </Container>
    </Drawer>
  );
};
