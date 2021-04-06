import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logoImg} alt="Nave.rs"/>

      <button type="button" onClick={signOut}>
        Sair
      </button>
    </Container>
  );
};

export default Header;
