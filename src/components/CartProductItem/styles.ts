import { styled } from "styled-components";

export const ProductItem = styled.div`
  height: 20%;
  margin: 10% 14%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;

  > img {
    width: 30%;
    object-fit: contain;
  }
`;
export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
