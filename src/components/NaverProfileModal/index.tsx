import Modal from 'react-modal';
import { intervalToDuration } from 'date-fns';

import { useProfileModal } from "../../hooks/ProfileModalContext";
import { useNaver } from '../../hooks/NaverContext';

import deleteImg from '../../assets/delete.svg';
import editImg from '../../assets/edit.svg';

import { Container, NaverInfo } from './styles';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';

Modal.setAppElement('#root');

interface NaverProps {
  id: string;
  name: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  url: string;
}

interface NaverProfileModalProps {
  data: NaverProps;
}

const NaverProfileModal: React.FC<NaverProfileModalProps> = ({
    data: { id, name, job_role, birthdate, admission_date, project, url }
  }) => {
  const { isModalOpen, handleCloseProfileModal } = useProfileModal();
  const { deleteNaver } = useNaver();
  const history = useHistory();

  const formattedBirthday = useMemo(() => {
    const daysBetween = intervalToDuration({start: Date.now(), end: new Date(birthdate)});

    return `${daysBetween.years} anos`;
  }, [birthdate]);

  const formattedAdmissionDate = useMemo(() => {
    const daysBetween = intervalToDuration({start: Date.now(), end: new Date(admission_date)});

    if (daysBetween.years === 0) {
      return `${daysBetween.months} mes(es)`;
    }

    if (daysBetween.months === 0) {
      return `${daysBetween.years} ano(s)`;
    }

    return `${daysBetween.years} ano(s) e ${daysBetween.months} meses`;
  }, [admission_date]);

  const handleDelete = useCallback((id: string) => {
    deleteNaver(id);
    handleCloseProfileModal();
  }, [deleteNaver, handleCloseProfileModal]);

  const handleEditNaver = useCallback(() => {
    history.push(`/edit/${id}`);
    handleCloseProfileModal();
  }, [history, id, handleCloseProfileModal]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseProfileModal}
      overlayClassName="naver-profile-modal-overlay"
      className="naver-profile-modal-content"
    >
      <Container>
        <img src={url} alt={name} />

        <NaverInfo>
          <h2>{name}</h2>
          <span>{job_role}</span>

          <strong>Idade</strong>
          <span>{formattedBirthday}</span>

          <strong>Tempo de empresa</strong>
          <span>{formattedAdmissionDate}</span>

          <strong>Projetos que participou</strong>
          <span>{project}</span>

          <div>
            <img src={deleteImg} alt="Deletar Naver" onClick={() => handleDelete(id)} />
            <img src={editImg} alt="Editar Naver" onClick={handleEditNaver} />
          </div>
        </NaverInfo>
      </Container>
    </Modal>
  );
};

export default NaverProfileModal;
