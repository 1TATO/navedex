import { useEffect } from 'react';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';

import closeImg from '../../../assets/close.svg';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription
    >
      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <button type="button" onClick={() => removeToast(message.id)} >
        <img src={closeImg} alt="Fechar" />
      </button>
    </Container>
  );
}

export default Toast;
