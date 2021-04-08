import { createContext, useCallback, useContext, useState } from "react";
import AlertModal from "../components/AlertModal";

interface AlertModalProps {
  title: string;
  description: string;
  hasButtons?: boolean;
  hasCloseButton?: boolean;
  onConfirmAction?: () => void | Promise<void>;
  onCloseAction?: () => void | Promise<void>;
};

interface AlertModalContextData {
  isModalOpen: boolean;
  handleOpenAlertModal: (data: AlertModalProps) => void;
  handleCloseAlertModal: () => void;
};

const AlertModalContext = createContext({} as AlertModalContextData);

const AlertModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertData, setAlertData] = useState({} as AlertModalProps)

  const handleOpenAlertModal = useCallback((data: AlertModalProps) => {
    setIsModalOpen(true);
    setAlertData(data);
  }, []);

  const handleCloseAlertModal = useCallback(() => {
    setIsModalOpen(false);
    setAlertData({} as AlertModalProps);
  }, []);

  return (
    <AlertModalContext.Provider value={{
      isModalOpen,
      handleOpenAlertModal,
      handleCloseAlertModal,
    }}>
      {children}

      {isModalOpen && (
        <AlertModal
          data={alertData}
        />
      )}
    </AlertModalContext.Provider>
  )
};

function useAlertModal(): AlertModalContextData {
  const context = useContext(AlertModalContext);

  return context;
}

export { AlertModalProvider, useAlertModal };
