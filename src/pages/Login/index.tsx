import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';
import { useToast } from '../../hooks/ToastContext';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      addToast({
        title: 'Login com sucesso',
        description: 'Seu login ocorreu com sucesso',
      });

      history.push('/dashboard');
    } catch (err) {
      console.log(err);

      formRef.current?.setErrors({
        email: ' ',
        password: ' ',
      });

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }
  }, [signIn, history, addToast]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Nave.rs" />

        <Form
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <Input name="email" placeholder="E-mail" />

          <Input name="password" type="password" placeholder="Senha" />

          <button type="submit">
            Entrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
