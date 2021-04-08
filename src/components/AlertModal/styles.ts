import styled, { css } from 'styled-components';

interface AlertModalProps {
  hasButtons: boolean;
  hasCloseButton: boolean;
}

export const Container = styled.div<AlertModalProps>`
  ${props => props.hasCloseButton
    && css`
      img {
        position: absolute;
      
        right: 2rem;
        top: 2rem;

        width: 1rem;
        height: 1rem;

        cursor: pointer;
      }
    `
  }

  div {
    height: 10rem;

    h1 {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }

    p {
      margin-bottom: 5rem;
    }
  }

  ${props => props.hasButtons
    && css`
      button {
        position: absolute;
        right: 22rem;
        width: 35%;

        & + button {
          margin-left: 2rem;
          right: 3rem;
        }
      }
    `
  }
`;
