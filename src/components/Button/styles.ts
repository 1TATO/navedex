import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 15%;
  height: 3rem;

  background: transparent;
  border: none;

  font-weight: 600;

  @media (max-width: 950px) {
    width: 25%;
  }

  @media (max-width: 600px) {
    width: 45%;
  }

  @media (max-width: 400px) {
    width: 55%;
  }

  ${props => props.color === 'white'
    ? css`
        background: var(--background);
        color: var(--black);

        border: 1px solid var(--black);
      `
    : css`
        background: var(--black);
        color: #FFF;

        border: none;
      ` 
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
