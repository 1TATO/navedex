import React, { useCallback, useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import * as Yup from 'yup';
import { Form } from '@unform/web';

import { useNaver } from '../../hooks/NaverContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import goBackImg from '../../assets/goBack.svg';

import { FormContainer } from "./styles";

interface FormProps {
  title: string;
  edit?: boolean;
};

interface EditNaverProps {
  id: string;
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
};

type CreateNaverProps = Omit<EditNaverProps, 'id'>;

const NaverForm: React.FC<FormProps> = ({ title, edit }) => {
  const { params } = useRouteMatch<EditNaverProps>();
  const { editNaver, getNaverData, createNaver } = useNaver();
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

  const handleEditSubmit = useCallback(async (editedData: EditNaverProps) => {
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

  const handleCreateSubmit = useCallback(async (data: CreateNaverProps) => {
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
    <FormContainer>
      <div>
        <Link to="/dashboard">
          <img src={goBackImg} alt="Voltar" />
        </Link>

        <h2>{title}</h2>
      </div>

      {edit ? (
        <Form
          onSubmit={handleEditSubmit}
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
      ) : (
        <Form onSubmit={handleCreateSubmit}>
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
      )}
    </FormContainer>
  );
};

export default NaverForm;
