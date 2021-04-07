import Modal from 'react-modal';

import { useProfileModal } from "../../hooks/ProfileModalContext";

Modal.setAppElement('#root');

const NaverProfileModal: React.FC = () => {
  const { isModalOpen, handleCloseProfileModal } = useProfileModal();
  
  return (
    <Modal isOpen={isModalOpen} onRequestClose={handleCloseProfileModal}>
      <h2>Profile Modal</h2>
    </Modal>
  );
};

export default NaverProfileModal;
