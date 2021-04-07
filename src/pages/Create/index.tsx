import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useNaver } from '../../hooks/NaverContext';

import Header from "../../components/Header";
import Input from '../../components/Input';
import Button from '../../components/Button';

import goBackImg from '../../assets/goBack.svg';

import { Container, FormContainer } from './styles';

interface CreateNaverProps {
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
}

const Create: React.FC = () => {
  const { createNaver } = useNaver();

  const handleSubmit = useCallback(async (data: CreateNaverProps) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        job_role: Yup.string().required('Cargo é obrigatório'),
        birthdate: Yup.string().required('Idade é obrigatória'),
        admission_date: Yup.string().required('Tempo de empresa é obrigatório'),
        project: Yup.string().required('Projetos são obrigatórios'),
        url: Yup.string().required('URL é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      createNaver(data);
    } catch (err) {
      console.log(err);
    }
  }, [createNaver]);

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

        <Form onSubmit={handleSubmit}>
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
