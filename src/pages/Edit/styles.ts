import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 3rem;

  @media (max-width: 500px) {
    padding: 1rem;
  }

  animation: ${appearFromBottom} 1s;
`;
