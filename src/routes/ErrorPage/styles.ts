import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ff0000;
  font-weight: bolder;
  font-size: 2em;

  a {
    position: absolute;
    left: 10px;
    top: 10px;

    :hover {
      color: #ff0000;
    }
  }
`;
