import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../services/api';
import { useAlertModal } from './AlertModalContext';

interface Naver {
  id: string;
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
};

type CreateNaver = Omit<Naver, 'id'>;

interface NaverContextData {
  navers: Naver[];
  createNaver: (data: CreateNaver) => Promise<void>;
};

const NaversContext = createContext({} as NaverContextData);

const NaverProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [navers, setNavers] = useState<Naver[]>([]);

  const { handleOpenAlertModal } = useAlertModal();

  useEffect(() => {
    api.get('/navers')
      .then(response => setNavers(response.data));
  }, []);

  const createNaver = useCallback(
    async ({
      admission_date,
      birthdate,
      job_role,
      name,
      project,
      url,
    }: Omit<Naver, 'id'>) => {
      try {
        const response = await api.post('/navers', {
          name,
          birthdate: format(new Date(birthdate), 'dd/MM/yyyy', { locale: ptBR }),
          admission_date: format(new Date(admission_date), 'dd/MM/yyyy', { locale: ptBR }),
          job_role,
          project,
          url,
        });

        const naver = response.data;

        setNavers(navers => [...navers, naver]);

        handleOpenAlertModal({
          title: 'Naver criado',
          description: 'Naver criado com sucesso!',
          hasCloseButton: true,
          hasButtons: false,
        });

        history.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    [history, handleOpenAlertModal],
  );

  return (
    <NaversContext.Provider value={{ navers, createNaver }}>
      {children}
    </NaversContext.Provider>
  );
}

function useNaver(): NaverContextData {
  const context = useContext(NaversContext);

  return context;
}

export { NaverProvider, useNaver };
