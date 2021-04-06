import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3rem;

  h1 {
    font-weight: 600;
    font-size: 3rem;
    width: 80%;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;

export const NaverCardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  
  margin-top: 3rem;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
