import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div{
    margin-top: 2rem;
  }

  label {
    font-weight: 600;
    font-size: 1.14rem;
  }

  input {
    height: 2.5rem;
    padding: 0 0.5rem;

    margin-top: 0.25rem;

    border: 1px solid var(--black);
    background: var(--background);
  }
`;