import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from "../../components/Header";
import Input from '../../components/Input';
import Button from '../../components/Button';

import goBackImg from '../../assets/goBack.svg';

import { Container, FormContainer } from './styles';

const Create: React.FC = () => {
  return (
    <Container>
      <Header />

      <FormContainer>
        <div>
          <Link to="/dashboard">
            <img src={goBackImg} alt="Voltar" />
          </Link>

          <h2>Adicionar Naver</h2>
        </div>

        <Form onSubmit={() => { }}>
          <Input
            name="name"
            className="name"
            placeholder="Nome"
          />

          <Input
            name="job_role"
            className="job_role"
            placeholder="Cargo"
          />

          <Input
            name="birthdate"
            className="birthdate"
            placeholder="Idade"
            type="date"
          />

          <Input
            name="admission_date"
            className="admission_date"
            placeholder="Tempo de empresa"
            type="date"
          />

          <Input
            name="project"
            className="project"
            placeholder="Projetos que participou"
          />

          <Input
            name="url"
            className="url"
            placeholder="URL da foto do Naver"
          />

          <Button type="submit">
            Salvar
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Create;
