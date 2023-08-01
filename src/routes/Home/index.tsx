import { Header } from '../../components/Header/index.tsx';
import { RestaurantOption } from '../../components/RestaurantOption';
import { TabBar } from '../../components/TabBar/index.tsx';
import { Container } from "./styles.ts";

export const Home = () => {
    return (
        <Container>
          <RestaurantOption />
        </Container>
    );
};
