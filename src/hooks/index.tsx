import { AuthProvider } from "./AuthContext";
import { NaverProvider } from "./NaverContext";
import { ProfileModalProvider } from "./ProfileModalContext";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ProfileModalProvider>
      <NaverProvider>
        {children}
      </NaverProvider>
    </ProfileModalProvider>
  </AuthProvider>
);

export default AppProvider;
