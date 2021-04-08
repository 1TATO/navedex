import { AlertModalProvider } from "./AlertModalContext";
import { AuthProvider } from "./AuthContext";
import { NaverProvider } from "./NaverContext";
import { ProfileModalProvider } from "./ProfileModalContext";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ProfileModalProvider>
      <AlertModalProvider>
        <NaverProvider>
          {children}
        </NaverProvider>
      </AlertModalProvider>
    </ProfileModalProvider>
  </AuthProvider>
);

export default AppProvider;
