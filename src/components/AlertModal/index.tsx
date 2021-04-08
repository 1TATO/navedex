import Modal from 'react-modal';
import { useAlertModal } from '../../hooks/AlertModalContext';

import Button from '../Button';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';
import { useNaver } from '../../hooks/NaverContext';

Modal.setAppElement('#root');

interface AlertModalProps {
  title: string;
  description: string;
  hasButtons?: boolean;
  hasCloseButton?: boolean;
  onConfirmAction?: () => void | Promise<void>;
  onCloseAction?: () => void | Promise<void>;
};

interface AlertProps {
  data: AlertModalProps;
};

const AlertModal: React.FC<AlertProps> = ({
  data: { title, description, hasButtons, hasCloseButton, onConfirmAction }
}) => {
  const { isModalOpen, handleCloseAlertModal } = useAlertModal();
  const { deleteNaver } = useNaver();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseAlertModal}
      overlayClassName="alert-modal-overlay"
      className="alert-modal-content"
    >
      <Container hasCloseButton hasButtons>
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
            <Button onClick={onConfirmAction}>
              Excluir
            </Button>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default AlertModal;
