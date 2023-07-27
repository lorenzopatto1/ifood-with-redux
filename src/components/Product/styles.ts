import { styled } from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  min-height: 147px;
  height: 100%;
  width: 100%;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  transition: .2s;
  box-shadow: 2px 2px 8px #f2f2f2;

  &:hover {
    border-color: #dcdcdc;
    cursor: pointer;
  }
  `;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  
> img {
  width: 170px;
  object-fit: contain;
}

  @media (max-width: 420px) {
    display: none;
  }
`;

export const ProductInfoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 20px;
  flex-direction: column;
  padding: 15px;
  div > h1 {
    font-weight: 500;
    font-size: 1.2em;
    white-space: nowrap;

    @media (max-width: 620px) {
      font-size: 0.9em;
    }
  }
  div > p {
    margin-top: 20px;
    font-size: 0.8em;

    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;
export const ProductPrice = styled.div`
  display: block;
  
`;
