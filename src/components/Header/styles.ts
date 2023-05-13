import styled from "styled-components";

export const Container = styled.header`
  max-width: 100vw;
  height: 80px;
  padding: 20px 32px;
  position: sticky;
  z-index: 9999;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  grid-column-gap: 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #dcdcdc;

  font-size: 0.842em;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 62px;
  height: 46px;
  cursor: pointer;
`;
export const Logo = styled.svg`
  width: 52px;
  height: 40px;
`;
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  line-height: 16px;

  li {
    margin-left: 16px;
  }

  li:hover {
    color: #ea1d2c;
    cursor: pointer;
  }

  ul > li:first-child {
    margin-left: 0;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  white-space: nowrap;
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  column-gap: 12px;
  button {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 8px 12px;
    border: 0;
    border-radius: 40%;

    &:hover {
      background-color: #f7f7f7;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 6px;
    font-size: 0.78em;
    color: #717171;
    white-space: nowrap;
  }
`;
