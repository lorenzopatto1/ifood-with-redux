import { useState } from "react";
import { RestaurantOption } from "../RestaurantOption/index.tsx";
import { Container } from "./styles.ts";
import { Restaurant } from "../Restaurant/index.tsx";

export const Main = () => {
  // ! Adicionar a funcionalidade de trocar o conteúdo do main ao selecionar o restaurante desejado
  // const [restaurantIsSelected, setRestaurantIsSelected] = useState(false);
  // if (!restaurantIsSelected) {
  return (
    <Container>
      <RestaurantOption />
    </Container>
  );
// }
// return (
//   <Container>
//     <Restaurant />
//   </Container>
// )
};
