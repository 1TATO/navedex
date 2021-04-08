import styled, { css } from 'styled-components';

interface ToastProps {
  type?: string;
  hasDescription: boolean;
};

export const Container = styled.div<ToastProps>`
  width: 22.5rem;

  position: relative;
  padding: 1rem 1.8rem 1rem 1rem;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: var(--toast-success);
  color: var(--toast-success-color);

  & + div {
    margin-top: 1rem;
  }

  ${props =>
    props.type === 'error' &&
    css`
      background: var(--toast-error);
      color: var(--error);
    `
  }

  div {
    flex: 1;
    margin-left: 7px;

    p {
      margin-top: 4px;
      opacity: 0.8;
      line-height: 1rem;
    }
  }

  button {
    position: absolute;

    right: 0.5rem;
    top: 1rem;

    opacity: 0.6;
    border: none;
    background: transparent;

    width: 1rem;
    height: 1rem;
  }
`;
