import NaverForm from '../../components/Form';
import Header from "../../components/Header";

import { Container } from './styles';

const Edit: React.FC = () => {
  return (
    <Container>
      <Header />

      <NaverForm
        title="Editar Naver"
        edit={true}
      />
    </Container>
  );
};

export default Edit;
