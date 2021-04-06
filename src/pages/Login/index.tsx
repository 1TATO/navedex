import { Form } from '@unform/web';

import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Login: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

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
