import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    color: #717171;
    font-family: helvetica, sans-serif;
    overflow-x: hidden;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;
  }

`