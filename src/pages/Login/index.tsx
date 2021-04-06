import { useCallback } from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();
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

      signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }, [signIn, history]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Nave.rs" />

        <Form onSubmit={handleSubmit}>
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
