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
  
  @media (max-width: 959px) {
    display: none;
}
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

  @media (max-width: 1200px) {
    display: none
  }

  li {
    margin-left: 16px;

    :hover {
      color: #ea1d2c;
    }
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

  @media (max-width: 500px) {
    display: none
  }
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  column-gap: 12px;
  button {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 8px 20px;
    border: 0;
    border-radius: 200px;

    &.Active {
      background-color: #ea1d2c;

      > div span {
        color: #f7f7f7;
      }
    }
    &:hover:not(.Active) {
      background-color: #f7f7f7;
    }
  }
`;

export const CartInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  font-size: 0.78em;
  color: #717171;
  white-space: nowrap;
  @media (max-width: 500px) {
    display: none;
    
  }
`