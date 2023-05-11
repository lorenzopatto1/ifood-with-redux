export interface ProductInfos {
  id: number;
  name: string;
  description: string;
  imgURL: string;
  price: number;
}

export const products: Array<ProductInfos> = [
  {
    id: 1,
    name: "McFlurry M&M's",
    description: "Massa de baunilha, com cobertura de chocolate e M&M's",
    imgURL: "https://static.ifood-static.com.br/image/upload/t_low/pratos/ee139d16-6786-485a-8565-2d252a5bc995/202304250936_NO57_i.jpg",
    price: 15.79
  },
  {
    id: 2,
    name: "Big Tasty Bacon Barbecue",
    description: "O nosso mais novo sanduíche traz uma combinação especial do delicioso molho barbecue do Méqui, a nossa famosíssima cebola crispy e o incrível molho tasty. Nesta novidade ainda temos a maior hambúrguer de carne 100% bovina do Mcdonald's, 3 deliciosas fatias de queijo, tomate e alface crocante.",
    imgURL: "https://static.ifood-static.com.br/image/upload/t_low/pratos/ee139d16-6786-485a-8565-2d252a5bc995/202304250935_JR74_i.jpg",
    price: 29.79
  },
  {
    id: 3,
    name: "McOferta Big Tasty Bacon Barbecue",
    description: "O nosso mais novo sanduíche traz uma combinação especial do delicioso molho barbecue do Méqui, a nossa famosíssima cebola crispy e o incrível molho tasty. Nesta novidade ainda temos a maior hambúrguer de carne 100% bovina do Mcdonald’s, 3 deliciosas fatias de queijo, tomate e alface crocante.",
    imgURL: "https://static.ifood-static.com.br/image/upload/t_low/pratos/ee139d16-6786-485a-8565-2d252a5bc995/202305051200_JDHF_i.jpg",
    price: 49.09
  },
  {
    id: 4,
    name: "Combo R$59,98",
    description: "Escolha 2(dois) sanduíches entre as opções: Big Mac, McChicken, Duplo Burger com Queijo + 1(um) McFritas média, 1(um) bebida.",
    imgURL: "https://static.ifood-static.com.br/image/upload/t_low/pratos/8e3ef171-2f8f-4383-ad8b-6908e526cc99/202208310841_YI2Q_i.jpg",
    price: 59.98
  },
  {
    id: 5,
    name: "McFlurry M&M's",
    description: "Escolha 2(dois) sanduíches entre as opções: Big Mac, McChicken, Duplo Burger com Queijo + 2(duas) McFritas média.",
    imgURL: "https://static.ifood-static.com.br/image/upload/t_low/pratos/aad4a136-5436-4d42-b8a9-b34a7b7b3ec8/202105131557_738V_f.png",
    price: 60.98
  },
  {
    id: 6,
    name: "McOferta Brabo Melt Crispy",
    description: "Delicioso molho sabor cheddar, hambúrguer de carne 100% bovina, a nova Méquinese, exclusiva maionese especial com sabor de carne defumada, cebola crispy, fatias de bacon, queijo sabor cheddar, tudo isso no pão tipo brioche, acompanhamento e bebida",
    imgURL: "https://static.ifood-static.com.br/image/upload/t_low/pratos/d7a777fe-f1ee-4925-8256-68efe3f0b6b0/202301101553_ab7nr9sxxow.png",
    price: 51.59
  },
  {
    id: 7,
    name: "McOferta Brabo Bacon Salad",
    description: "Composto pelo nosso pão tipo brioche, hambúrguer de carne 100% bovina, a nova Méquinese, exclusiva maionese especial com sabor de carne defumada, alface, tomate, fatias de bacon e queijo sabor cheddar, acompanhamento e bebida",
    imgURL: "https://static.ifood-static.com.br/image/upload/t_low/pratos/d7a777fe-f1ee-4925-8256-68efe3f0b6b0/202301101553_cjt0wrempc.png",
    price: 51.59
  },
];
