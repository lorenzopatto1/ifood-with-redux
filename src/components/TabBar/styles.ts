import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.7rem;

  @media (min-width: 960px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center
  }
`;
