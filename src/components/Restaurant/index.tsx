import {
  Container,
  Banner,
  HeaderMerchant,
  MerchantContent,
  VerifyIcon,
  RateContainer,
  MerchantDetailsContainer,
  MoreButton,
  MinimumOrder,
  DollarSign,
  Separation,
  Products
} from "./styles.ts";
import { Seal, Star } from "@phosphor-icons/react";
import { SearchZone } from "../SearchZone/index.tsx";
import { Product } from "../Product/index.tsx";
import { restaurant } from "../../data/restaurant.ts";

export const Restaurant = () => {
  return (
    <Container>
      <Banner>
        <img src="https://www.ifood.com.br/static/images/merchant/banner/DEFAULT.png" />
      </Banner>
      <HeaderMerchant>
        <img src={restaurant.imgURL} />
        <MerchantContent>
          <h1>
            {restaurant.name} - {restaurant.location}
          </h1>
          <span id="verify">
            <VerifyIcon>
              <Seal
                className="verifySeal"
                size={28}
                weight="fill"
                fill="#ea1d2c"
              />
              <Star
                className="verifyStar"
                size={12}
                weight="fill"
                fill="#fff"
              />
            </VerifyIcon>
            <RateContainer>
              <Star className="Star" size={15} weight="fill" />
              <span>{restaurant.rating}</span>
            </RateContainer>
          </span>
        </MerchantContent>
        <MerchantDetailsContainer>
          <MoreButton>Ver mais</MoreButton>
          <MinimumOrder>
            <DollarSign>$</DollarSign>
            Pedido mínimo R$ {restaurant.minimumOrder},00
          </MinimumOrder>
        </MerchantDetailsContainer>
      </HeaderMerchant>
      <SearchZone placeholder="Buscar no cardápio"/>
      <Separation />
     <Products>
      {restaurant.products.map((product) => (<Product key={product.id} product={product} />))}
     </Products>
    </Container>
  );
}