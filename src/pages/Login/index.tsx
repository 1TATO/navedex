import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Nave.rs" />

        <Form onSubmit={() => {}}>
          <label>E-mail</label>
          <input name="email" placeholder="E-mail" />

          <label>Senha</label>
          <input name="password" type="password" placeholder="Senha" />

          <button type="submit">
            Entrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
