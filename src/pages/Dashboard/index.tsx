import Header from '../../components/Header';
import NaverCard from '../../components/NaverCard';
import Button from '../../components/Button';

import { Container, Content, ContentHeader, NaverCardContent } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <ContentHeader>
          <h1>Navers</h1>

          <Button>
            Adicionar Naver
          </Button>
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
