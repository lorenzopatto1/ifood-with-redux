import { styled } from "styled-components";

export const ProductItem = styled.div`
  margin: 10% 14%;
  display: flex;
  padding-bottom: 4%;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
  user-select: none;

  @media (max-width: 1000px) {
    justify-content: center;

    img {
      display: none;
    }
  }

  > img {
    width: 30%;
    object-fit: contain;
  }
`;
export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > span {
    font-weight: bold;
  }
  
  > span:nth-child(2) {
    color: #000;
  }
`;
export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 20px;

  > svg {
    cursor: pointer;
  }

  > span {
    color: #3e3e3e;
    font-weight: bold;
    font-size: 1.2em;
  }
`;
