import { AuthProvider } from './hooks/AuthContext';

import Login from './pages/Login';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    
      <GlobalStyle />
    </>
  );
}

export default App;
