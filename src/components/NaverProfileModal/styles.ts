import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    img {
      height: 50%;
    }
  }
`;

export const NaverInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 0 3rem;

  position: relative;

  h2 {
    font-size: 2rem;
  }

  span {
    margin-top: 1rem;
  }

  strong {
    margin-top: 2rem;
  }

  @media (max-width: 800px) {
    margin: 1.5rem 0 0 2rem;
    height: 50%;

    h2 {
      font-size: 1.5rem;
    }

    span {
      margin-top: 0.5rem;
    }

    strong {
      margin-top: 1rem;
    }
  }

  div {
    > img {
      position: absolute;

      bottom: 1.5rem;

      height: 2rem;
      width: 2rem;

      cursor: pointer;

      & + img {
        margin-left: 3rem;
      }

      @media (max-width: 800px) {
        height: 1.5rem;
        width: 1.5rem;

      }
    }
  }
`;
