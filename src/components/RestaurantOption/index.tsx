import { restaurant } from "../../data/restaurant.ts";

import { RestaurantButton, Logo, RestaurantInfo, Container } from "./styles.ts";

interface RestaurantOptionProps {
  handleRestaurantClick: () => void;
}

export const RestaurantOption = ({handleRestaurantClick}: RestaurantOptionProps) => {
    return (
      <Container>
        <RestaurantButton onClick={handleRestaurantClick}>
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
};
