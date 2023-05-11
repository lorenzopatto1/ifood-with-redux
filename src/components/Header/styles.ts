import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  padding: 20px 32px;
  position: sticky;
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
`
export const Logo = styled.svg`
width: 52px;
height: 40px;
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  line-height: 16px;
`
export const SearchZone = styled.div`
  width: 100%;
  max-width: 700px;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 4px;
  form {
    height: 100%;
    width: 100%;
    input {
      min-width: 320px;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border-color: transparent;
      font-weight: 300;
      font-size: 1.14em;
      line-height: 1.25em;
      &:focus {
        outline: none;
      }
    }
  }
`
export const SearchIcon = styled.div`
  margin: auto 14px;

`
export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  white-space: nowrap;
`
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
    font-size: .78em;
    color: #717171;
    white-space: nowrap;
  }
`