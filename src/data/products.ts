export interface ProductInfos {
  id: number;
  name: string;
  description: string;
  imgURL?: string;
  price: number;
}

export const products: Array<ProductInfos> = [
  {
    id: 1,
    name: "McFlurry M&M's",
    description: "Massa de baunilha, com cobertura de chocolate e M&M's",
    price: 15.79
  },
  {
    id: 2,
    name: "Big Tasty Bacon Barbecue",
    description: "O nosso mais novo sanduíche traz uma combinação especial do delicioso molho barbecue do Méqui, a nossa famosíssima cebola crispy e o incrível molho tasty. Nesta novidade ainda temos a maior hambúrguer de carne 100% bovina do Mcdonald's, 3 deliciosas fatias de queijo, tomate e alface crocante.",
    price: 29.79
  },
  {
    id: 3,
    name: "McOferta Big Tasty Bacon Barbecue",
    description: "O nosso mais novo sanduíche traz uma combinação especial do delicioso molho barbecue do Méqui, a nossa famosíssima cebola crispy e o incrível molho tasty. Nesta novidade ainda temos a maior hambúrguer de carne 100% bovina do Mcdonald’s, 3 deliciosas fatias de queijo, tomate e alface crocante.",
    price: 49.09
  },
  {
    id: 4,
    name: "Combo R$59,98",
    description: "",
    price: 59.98
  },
  {
    id: 5,
    name: "McFlurry M&M's",
    description: "",
    price: 60.98
  },
  {
    id: 6,
    name: "McOferta Brabo Melt Crispy",
    description: "Delicioso molho sabor cheddar, hambúrguer de carne 100% bovina, a nova Méquinese, exclusiva maionese especial com sabor de carne defumada, cebola crispy, fatias de bacon, queijo sabor cheddar, tudo isso no pão tipo brioche, acompanhamento e bebida",
    price: 51.59
  },
  {
    id: 7,
    name: "McOferta Brabo Bacon Salad",
    description: "Composto pelo nosso pão tipo brioche, hambúrguer de carne 100% bovina, a nova Méquinese, exclusiva maionese especial com sabor de carne defumada, alface, tomate, fatias de bacon e queijo sabor cheddar, acompanhamento e bebida",
    price: 51.59
  },
];
