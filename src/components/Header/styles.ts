import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  img {
    height: 80%;
    max-width: 80%;

    @media (max-width: 500px) {
      width: 40%;
    }
  }

  button {
    background: transparent;
    border: none;
    color: var(--black);
    
    font-weight: 600;
  }
`;