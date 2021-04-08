import Header from "../../components/Header";
import NaverForm from '../../components/Form';

import { Container } from './styles';

const Create: React.FC = () => {
  return (
    <Container>
      <Header />

      <NaverForm
        title="Adicionar Naver"
      />
    </Container>
  );
};

export default Create;
