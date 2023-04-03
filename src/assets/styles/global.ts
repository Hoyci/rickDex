import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.brown};
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
