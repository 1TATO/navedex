import { createContext, useCallback, useContext, useState } from "react";
import NaverProfileModal from "../components/NaverProfileModal";

interface ProfileModalContextData {
  isModalOpen: boolean;
  handleOpenProfileModal: () => void;
  handleCloseProfileModal: () => void;
}

const ProfileModalContext = createContext({} as ProfileModalContextData);

const ProfileModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProfileModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseProfileModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <ProfileModalContext.Provider value={{ isModalOpen, handleOpenProfileModal, handleCloseProfileModal }} >
      {children}

      {isModalOpen && (
        <NaverProfileModal />
      )};
    </ProfileModalContext.Provider>
  );
}

function useProfileModal(): ProfileModalContextData {
  const context = useContext(ProfileModalContext);

  return context;
}

export { ProfileModalProvider, useProfileModal };
