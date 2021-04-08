import { useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useNaver } from '../../hooks/NaverContext';

import Header from "../../components/Header";
import Input from '../../components/Input';
import Button from '../../components/Button';

import goBackImg from '../../assets/goBack.svg';

import { Container, FormContainer } from './styles';

interface EditNaverProps {
  id: string;
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
}

const Edit: React.FC = () => {
  const { params } = useRouteMatch<EditNaverProps>();
  const { editNaver, getNaverData } = useNaver();
  const [initialData, setInitialData] = useState<EditNaverProps>({} as EditNaverProps);

  const checkId = useCallback(async () => {
    if (params.id) {
      const naverData = await getNaverData(params.id);

      setInitialData(naverData);
    }
  }, [params, getNaverData]);

  useEffect(() => {
    checkId()
  }, [checkId]);

  const handleSubmit = useCallback(async (editedData: EditNaverProps) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        job_role: Yup.string().required('Cargo é obrigatório'),
        birthdate: Yup.string().required('Idade é obrigatória'),
        admission_date: Yup.string().required('Tempo de empresa é obrigatório'),
        project: Yup.string().required('Projetos são obrigatórios'),
        url: Yup.string().required('URL é obrigatória'),
      });

      await schema.validate(editedData, {
        abortEarly: false,
      });

      const data = {
        ...editedData,
        id: params.id,
      };

      editNaver(data);
    } catch (err) {
      console.log(err);
    }
  }, [editNaver, params]);

  return (
    <Container>
      <Header />

      <FormContainer>
        <div>
          <Link to="/dashboard">
            <img src={goBackImg} alt="Voltar" />
          </Link>

          <h2>Editar Naver</h2>
        </div>

        <Form
          onSubmit={handleSubmit}
          initialData={initialData}
        >
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

export default Edit;
