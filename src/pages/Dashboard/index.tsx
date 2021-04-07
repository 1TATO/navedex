import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import NaverCard from '../../components/NaverCard';
import Button from '../../components/Button';

import { Container, Content, ContentHeader, NaverCardContent } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  function handleCreateNewNaver() {
    history.push('/create')
  }

  return (
    <Container>
      <Header />

      <Content>
        <ContentHeader>
          <h1>Navers</h1>

          <Button onClick={handleCreateNewNaver}>
            Adicionar Naver
          </Button>
        </ContentHeader>

        <NaverCardContent>
          <NaverCard />
        </NaverCardContent>
      </Content>
    </Container>
  );
};

export default Dashboard;
