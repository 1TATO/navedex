import Modal from 'react-modal';
import { useAlertModal } from '../../hooks/AlertModalContext';

import Button from '../Button';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

Modal.setAppElement('#root');

interface AlertModalProps {
  title: string;
  description: string;
  hasButtons?: boolean;
  hasCloseButton?: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({ title, description }: AlertModalProps) => {
  const { isModalOpen, handleCloseAlertModal, hasCloseButton, hasButtons } = useAlertModal();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseAlertModal}
      overlayClassName="alert-modal-overlay"
      className="alert-modal-content"
    >
      <Container hasCloseButton={hasCloseButton} hasButtons={hasButtons} >
        {hasCloseButton && (
          <img src={closeImg} alt="Fechar" onClick={handleCloseAlertModal} />
        )}

        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {hasButtons && (
          <>
            <Button color="white" onClick={handleCloseAlertModal}>
              Cancelar
            </Button>
            <Button>
              Excluir
            </Button>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default AlertModal;
