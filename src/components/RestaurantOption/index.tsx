import { restaurant } from "../../data/restaurant.ts";
import { useState } from "react";

import { RestaurantButton, Logo, RestaurantInfo, Container } from "./styles.ts";
import { Restaurant } from "../Restaurant/index.tsx";

export const RestaurantOption = () => {
  const [restaurantIsSelected, setRestaurantIsSelected] = useState(false);
  if (!restaurantIsSelected) {
    return (
      <Container>
        <RestaurantButton onClick={() => setRestaurantIsSelected(true)}>
          <RestaurantInfo>
            <Logo>
              <img src={restaurant.imgURL} alt={restaurant.name} />
            </Logo>
            <p>
              {restaurant.name} - {restaurant.location}
            </p>
          </RestaurantInfo>
        </RestaurantButton>
      </Container>
    );
  }
  return <Restaurant />;
};
