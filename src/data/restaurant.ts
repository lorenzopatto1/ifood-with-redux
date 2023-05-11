import { products, ProductInfos } from "./products";

export interface RestaurantInfos {
  id: number;
  name: string;
  location: string;
  rating: number;
  imgURL: string;
  minimumOrder: number;
  products: ProductInfos[];
}

export const restaurant: RestaurantInfos = {
    id: 1,
    name: "Mcdonald's",
    location: "Jardim Primavera(aaa)",
    rating: 4.7,
    imgURL: 'https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/201907301739_ee139d16-6786-485a-8565-2d252a5bc995.jpg',
    minimumOrder: 15,
    products
}
