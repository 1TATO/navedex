import { AuthProvider } from './hooks/AuthContext';
import { BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Login />
        </Routes>
      </AuthProvider>
    
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
