import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.5rem 2rem;

  max-width: 90vw;
  height: 25.5rem;

  border: 1px solid var(--black);

  img {
    min-width: 90%;
    height: 3.75rem;
    
    margin-bottom: 2.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 400px;

    button {
      margin-top: 2rem;
      padding: 0.5rem;
      border: none;

      background: var(--black);
      color: #FFF;

      font-weight: 600;
      font-size: 1.14rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
