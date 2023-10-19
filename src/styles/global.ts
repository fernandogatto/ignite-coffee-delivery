import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['gray-600']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-800']};
  }

  button, a {
    transition: .3s ease all;
    border: transparent;
    cursor: pointer;
  }

  button {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`
