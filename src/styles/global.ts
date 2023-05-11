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

  li:nth-child(1) {
    margin-left: 0;
  }

  li {
    margin-left: 16px;
  }

  li:hover {
    color: #ea1d2c;
    cursor: pointer;
    
  }
`