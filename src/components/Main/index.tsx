import { useState } from "react";
import { RestaurantOption } from "../RestaurantOption/index.tsx";
import { Container } from "./styles.ts";
import { Restaurant } from "../Restaurant/index.tsx";

export const Main = () => {
  const [restaurantIsSelected, setRestaurantIsSelected] = useState(false);

  function handleRestaurantClick () {
    setRestaurantIsSelected(true);
  }

  if (!restaurantIsSelected) {
    return (
      <Container>
        <RestaurantOption handleRestaurantClick={handleRestaurantClick} />
      </Container>
    );
  }

  return (
    <Container>
      <Restaurant />
    </Container>
  );
};
