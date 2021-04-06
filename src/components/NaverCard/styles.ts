import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* margin: 3rem 2rem 0 0; */

  img {
    max-width: 100%;
    height: 26rem;

    cursor: pointer;
  }

  strong {
    margin-top: 1rem;
  }

  span {
    margin: 0.5rem 0 1rem;;
  }

  div {
    display: flex;

    img {
      cursor: pointer;
      height: 2rem;
      width: 2rem;

      & + img {
        margin-left: 0.5rem;
      }
    }
  }
`;
