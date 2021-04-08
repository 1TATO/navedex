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
  // hasButtons: boolean;
  // hasCloseButton: boolean;
};

const AlertModalContext = createContext({} as AlertModalContextData);

const AlertModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertData, setAlertData] = useState({} as AlertModalProps)
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [hasButtons, setHasButtons] = useState(false);
  // const [hasCloseButton, setHasCloseButton] = useState(false);

  const handleOpenAlertModal = useCallback((data: AlertModalProps) => {
    setIsModalOpen(true);
    setAlertData(data);
    // setTitle(title);
    // setDescription(description);
    // setHasCloseButton(hasCloseButton);
    // setHasButtons(hasButtons);
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
      // hasButtons,
      // hasCloseButton
    }}>
      {children}

      {isModalOpen && (
        <AlertModal
          data={alertData}
          // title={title}
          // description={description}
          // hasButtons={hasButtons}
          // hasCloseButton={hasCloseButton}
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
