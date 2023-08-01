import { restaurant } from "../../data/restaurant.ts";
import { Link } from 'react-router-dom'

import { RestaurantButton, Logo, RestaurantInfo, Container } from "./styles.ts";


export const RestaurantOption = () => {
    return (
      <Container>
        <RestaurantButton>
          <Link to={`restaurant/mcdonalds`}>
          <RestaurantInfo>
            <Logo>
              <img src={restaurant.imgURL} alt={restaurant.name} />
            </Logo>
            <p>
              {restaurant.name} - {restaurant.location}
            </p>
          </RestaurantInfo>
          </Link>
        </RestaurantButton>
      </Container>
    );
};
