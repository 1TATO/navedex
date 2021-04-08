import { createContext, useCallback, useContext, useState } from "react";
import AlertModal from "../components/AlertModal";

interface AlertModalContextData {
  isModalOpen: boolean;
  handleOpenAlertModal: ({ title, description, hasCloseButton, hasButtons }: DeleteAlertModal) => void;
  handleCloseAlertModal: () => void;
  hasButtons: boolean;
  hasCloseButton: boolean;
}

interface DeleteAlertModal {
  title: string;
  description: string;
  hasButtons: boolean;
  hasCloseButton: boolean;
};

const AlertModalContext = createContext({} as AlertModalContextData);

const AlertModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasButtons, setHasButtons] = useState(false);
  const [hasCloseButton, setHasCloseButton] = useState(false);

  const handleOpenAlertModal = useCallback(({ title, description, hasCloseButton, hasButtons }: DeleteAlertModal) => {
    setIsModalOpen(true);
    setTitle(title);
    setDescription(description);
    setHasCloseButton(hasCloseButton);
    setHasButtons(hasButtons);
  }, []);

  const handleCloseAlertModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <AlertModalContext.Provider value={{
      isModalOpen,
      handleOpenAlertModal,
      handleCloseAlertModal,
      hasButtons,
      hasCloseButton
    }}>
      {children}

      {isModalOpen && (
        <AlertModal
          title={title}
          description={description}
          hasButtons={hasButtons}
          hasCloseButton={hasCloseButton}
        />
      )};
    </AlertModalContext.Provider>
  )
};

function useAlertModal(): AlertModalContextData {
  const context = useContext(AlertModalContext);

  return context;
}

export { AlertModalProvider, useAlertModal };
