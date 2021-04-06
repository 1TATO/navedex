import Header from '../../components/Header';
import NaverCard from '../../components/NaverCard';

import { Container, Content, ContentHeader, NaverCardContent } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <ContentHeader>
          <h1>Navers</h1>

          <button>
            Adicionar Naver
          </button>
        </ContentHeader>

        <NaverCardContent>
          <NaverCard />
          <NaverCard />
          <NaverCard />
          <NaverCard />
          <NaverCard />
        </NaverCardContent>
      </Content>
    </Container>
  );
};

export default Dashboard;
