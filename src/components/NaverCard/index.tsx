import { useNaver } from '../../hooks/NaverContext';

import deleteImg from '../../assets/delete.svg';
import editImg from '../../assets/edit.svg';

import { Container } from './styles';

const NaverCard: React.FC = () => {
  const { navers } = useNaver();

  return (
    <>
      {navers.map(naver => (
        <Container key={naver.id}>
          <img src={naver.url} alt={naver.name} />

          <strong>{naver.name}</strong>
          <span>{naver.job_role}</span>

          <div>
            <img src={deleteImg} alt="Deletar Naver" />
            <img src={editImg} alt="Editar Naver" />
          </div>
        </Container>
      ))}
    </>
  );
};

export default NaverCard;
