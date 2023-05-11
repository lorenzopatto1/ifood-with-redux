import { useState } from "react";
import { restaurant } from "../../data/restaurant";

import {
  RestaurantOptionContainer,
  Logo,
  RestaurantInfo,
  Container,
  Banner,
  HeaderMerchant,
  MerchantContent,
} from "./styles.ts";
import { Seal, Star } from "@phosphor-icons/react";

export const Restaurant = () => {
  const [restaurantIsSelected, setRestaurantIsSelected] = useState(false);

  if (!restaurantIsSelected) {
    return (
      <RestaurantOptionContainer onClick={() => setRestaurantIsSelected(true)}>
        <RestaurantInfo>
          <Logo>
            <img src={restaurant.imgURL} alt={restaurant.name} />
          </Logo>
          <p>
            {restaurant.name} - {restaurant.location}
          </p>
        </RestaurantInfo>
      </RestaurantOptionContainer>
    );
  }

  return (
    <Container>
      <Banner>
        <img src="https://www.ifood.com.br/static/images/merchant/banner/DEFAULT.png" />
      </Banner>
      <HeaderMerchant>
        <img src={restaurant.imgURL} />
        <MerchantContent>
          <p>
            {restaurant.name} - {restaurant.location}
          </p>
          <span>
            <Seal className="Seal" size={32} weight="fill" fill="#ea1d2c"/>
            
            <Star className="Star" size={15} weight="fill" fill="#000" />
          </span>
        </MerchantContent>
      </HeaderMerchant>
    </Container>
  );
};
