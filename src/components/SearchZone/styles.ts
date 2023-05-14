import { styled } from "styled-components";

export const Container = styled.div`
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
      &::placeholder {
        opacity: 0.6;
      }
      &::selection {
        background-color: #ea1d2c;
        color: #fff;
      }
    }
  }
`;
export const SearchIcon = styled.div`
  margin: auto 14px;
`;
