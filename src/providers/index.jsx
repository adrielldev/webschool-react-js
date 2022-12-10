import { LoginProvider } from "../contexts/login/loginContext.jsx";
import { RegisterInfoProvider } from "../contexts/register/RegisterInfoContext.jsx";
import { ModalProvider } from "../contexts/modal/ContextModal.jsx";
import { UserProvider } from "../contexts/User/UserContext.jsx";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <UserProvider>
        <RegisterInfoProvider>
          <ModalProvider>{children}</ModalProvider>
        </RegisterInfoProvider>
      </UserProvider>
    </LoginProvider>
  );
};

export default Providers;
