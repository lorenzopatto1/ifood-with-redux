import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100%;
    font-size: 16px;
    color: #717171;
    font-family: helvetica, sans-serif;
    overflow-x: hidden;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    outline: none;

  }

  ul {
    display: flex;
    list-style: none;
  }


  a {
    text-decoration: none;
    color: #000;
  }
`