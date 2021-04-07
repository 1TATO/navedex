import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface Naver {
  id: string;
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
};

interface NaverContextData {
  navers: Naver[];
}

const NaversContext = createContext({} as NaverContextData);

const NaverProvider: React.FC = ({ children }) => {
  const [navers, setNavers] = useState<Naver[]>([]);

  useEffect(() => {
    api.get('/navers')
      .then(response => setNavers(response.data));
  }, []);

  return (
    <NaversContext.Provider value={{ navers }}>
      {children}
    </NaversContext.Provider>
  );
}

function useNaver(): NaverContextData {
  const context = useContext(NaversContext);

  return context;
}

export { NaverProvider, useNaver };
