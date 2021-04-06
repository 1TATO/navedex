import deleteImg from '../../assets/delete.svg';
import editImg from '../../assets/edit.svg';

import { Container } from './styles';

const NaverCard: React.FC = () => {
  return (
    <Container>
      <img src="https://images.unsplash.com/photo-1527630941-4a229fd674ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />

      <strong>Juliano Reis</strong>
      <span>Front-end Developer</span>

      <div>
        <img src={deleteImg} alt="Deletar Naver" />
        <img src={editImg} alt="Editar Naver" />
      </div>
    </Container>
  );
};

export default NaverCard;
