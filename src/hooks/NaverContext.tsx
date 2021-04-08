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
  deleteNaver: (id: string) => Promise<void>;
  editNaver: (data: Naver) => Promise<void>;
  getNaverData: (id: string) => Promise<Naver>;
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

  const confirmDelete = useCallback(
    async (id: string): Promise<void> => {
      try {
        await api.delete(`/navers/${id}`);

        handleOpenAlertModal({
          title: 'Naver excluído',
          description: 'Naver excluído com sucesso!',
        });

        setNavers(navers => navers.filter(naver => naver.id !== id));
      } catch (error) {
        console.log(error);
      }
    },
    [handleOpenAlertModal],
  );

  const deleteNaver = useCallback(
    async (id: string): Promise<void> => {
      try {
        handleOpenAlertModal({
          title: 'Excluir Naver',
          description: 'Tem certeza que deseja excluir este Naver?',
          hasCloseButton: false,
          hasButtons: true,
          onConfirmAction: () => {
            confirmDelete(id);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    [handleOpenAlertModal, confirmDelete],
  );

  const editNaver = useCallback(
    async ({
      id,
      admission_date,
      birthdate,
      job_role,
      name,
      project,
      url,
    }: Naver) => {
      try {
        const response = await api.put(`/navers/${id}`, {
          name,
          job_role,
          birthdate: format(new Date(birthdate), 'dd/MM/yyyy'),
          admission_date: format(new Date(admission_date), 'dd/MM/yyyy'),
          project,
          url,
        });

        const editedNaver = response.data;

        const updatedNavers = navers.map(naver => {
          if (naver.id === id) {
            return editedNaver;
          };

          return naver;
        });

        setNavers(updatedNavers);

        handleOpenAlertModal({
          title: 'Naver atualizado',
          description: 'Naver atualizado com sucesso!',
          hasCloseButton: true,
        });
        
        history.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    [history, handleOpenAlertModal, navers],
  );

  const getNaverData = useCallback(
    async (id: string): Promise<Naver> => {
      try {
        const response = await api.get<Naver>(`/navers/${id}`);

        const naverData = {
          id: response.data.id,
          job_role: response.data.job_role,
          birthdate: format(new Date(response.data.birthdate), 'yyyy-MM-dd'),
          admission_date: format(new Date(response.data.admission_date), 'yyyy-MM-dd'),
          project: response.data.project,
          name: response.data.name,
          url: response.data.url,
        };

        return naverData;
      } catch (error) {
        console.log(error);

        return {} as Naver;
      }
    }, []);

  return (
    <NaversContext.Provider
      value={{
        navers,
        createNaver,
        deleteNaver,
        editNaver,
        getNaverData,
      }}>
      {children}
    </NaversContext.Provider>
  );
}

function useNaver(): NaverContextData {
  const context = useContext(NaversContext);

  return context;
}

export { NaverProvider, useNaver };
