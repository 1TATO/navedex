import { AlertModalProvider } from "./AlertModalContext";
import { AuthProvider } from "./AuthContext";
import { NaverProvider } from "./NaverContext";
import { ProfileModalProvider } from "./ProfileModalContext";
import { ToastProvider } from "./ToastContext";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <AlertModalProvider>
        <NaverProvider>
          <ProfileModalProvider>
            {children}
          </ProfileModalProvider>
        </NaverProvider>
      </AlertModalProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
