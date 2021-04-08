import { AlertModalProvider } from "./AlertModalContext";
import { AuthProvider } from "./AuthContext";
import { NaverProvider } from "./NaverContext";
import { ProfileModalProvider } from "./ProfileModalContext";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <AlertModalProvider>
      <NaverProvider>
        <ProfileModalProvider>
          {children}
        </ProfileModalProvider>
      </NaverProvider>
    </AlertModalProvider>
  </AuthProvider>
);

export default AppProvider;
