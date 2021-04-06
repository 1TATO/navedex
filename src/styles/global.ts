import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #212121;
    --background: #E5E5E5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(---background);
    color: var(--black);
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Montserrat', serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 1080px){
    html{
        font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
        font-size: 87.5%;
    }
  }
`;