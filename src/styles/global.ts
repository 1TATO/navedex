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

  .naver-profile-modal-overlay,
  .alert-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
  }
  
  .naver-profile-modal-content {
    width: 100%;
    max-width: 75%;
    height: 80%;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    @media (max-width: 800px) {
      height: 90%;
    }
  }

  .alert-modal-content {
    width: 100%;
    max-width: 50rem;
    height: 30%;
    background: var(--background);
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;

    @media (max-width: 560px) {
      height: 18rem;
    }
  }
`;