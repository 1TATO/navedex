import { createContext, useCallback, useContext, useState } from "react";
import NaverProfileModal from "../components/NaverProfileModal";

interface NaverProps {
  id: string;
  name: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  url: string;
}

interface ProfileModalContextData {
  isModalOpen: boolean;
  handleOpenProfileModal: (data: NaverProps) => void;
  handleCloseProfileModal: () => void;
}

const ProfileModalContext = createContext({} as ProfileModalContextData);

const ProfileModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [naverData, setNaverData] = useState({} as NaverProps);

  const handleOpenProfileModal = useCallback((data: NaverProps) => {
    setIsModalOpen(true);
    setNaverData(data);
  }, []);

  const handleCloseProfileModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <ProfileModalContext.Provider value={{ isModalOpen, handleOpenProfileModal, handleCloseProfileModal }} >
      {children}

      {isModalOpen && (
        <NaverProfileModal
          data={naverData}
        />
      )};
    </ProfileModalContext.Provider>
  );
}

function useProfileModal(): ProfileModalContextData {
  const context = useContext(ProfileModalContext);

  return context;
}

export { ProfileModalProvider, useProfileModal };
