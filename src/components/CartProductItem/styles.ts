import { styled } from "styled-components";

export const ProductItem = styled.div`
  height: 20%;
  margin: 10% 14%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 4%;
  border-bottom: 1px solid #dcdcdc;
  user-select: none;

  > img {
    width: 30%;
    object-fit: contain;
  }
`;
export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
