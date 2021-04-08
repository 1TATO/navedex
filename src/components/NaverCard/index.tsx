import { useCallback } from 'react';

import { useNaver } from '../../hooks/NaverContext';
import { useProfileModal } from '../../hooks/ProfileModalContext';

import deleteImg from '../../assets/delete.svg';
import editImg from '../../assets/edit.svg';

import { Container } from './styles';

interface NaverData {
  id: string;
  name: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  url: string;
}

const NaverCard: React.FC = () => {
  const { navers } = useNaver();
  const { handleOpenProfileModal } = useProfileModal();
  const { deleteNaver } = useNaver();

  const onClickOpenProfileModal = useCallback((naver: NaverData) => {
    handleOpenProfileModal(naver);
  }, [handleOpenProfileModal]);

  const handleDelete = useCallback((id: string) => {
    deleteNaver(id);
  }, [deleteNaver]);

  return (
    <>
      {navers.map(naver => (
        <Container key={naver.id}>
          <img src={naver.url} alt={naver.name} onClick={() => onClickOpenProfileModal(naver)} />

          <strong>{naver.name}</strong>
          <span>{naver.job_role}</span>

          <div>
            <img src={deleteImg} alt="Deletar Naver" onClick={() => handleDelete(naver.id)} />
            <img src={editImg} alt="Editar Naver" />
          </div>
        </Container>
      ))}
    </>
  );
};

export default NaverCard;
