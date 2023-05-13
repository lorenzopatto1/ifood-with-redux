import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 80px;
  width: 36vw;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5 linear;
  overflow-y: auto;
  > svg {
    cursor: pointer;
    position: absolute;
    top: 8px;
    left: 20px;
  }
`;
export const CartEmptyInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    color: #3e3e3e;
  }
  span:last-child {
    font-weight: 500;
    color: #717171;
    margin-top: 12px;
  }
`;

export const CartEmptySVG = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  background-color: rgba(255, 0, 0, 0.05);
  border-radius: 100%;
`;
