import { Bag, X } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { CartEmptyInfos, CartEmptySVG, Container } from "./styles";

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { ApplicationState } from "../../redux/store";
import { CartProductItem } from "../CartProductItem";

interface CartZoneProps {
  cartIsOpen: boolean;
  toggleDrawer: () => void;
}

export const CartZone = ({ cartIsOpen, toggleDrawer }: CartZoneProps) => {
  const { products } = useSelector(
    (rootReducer: ApplicationState) => rootReducer.cartReducer
  );

  return (
    <Drawer
      open={cartIsOpen}
      onClose={toggleDrawer}
      direction="right"
      overlayOpacity={0}
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
      </Container>
    </Drawer>
  );
};
