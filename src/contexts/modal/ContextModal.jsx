import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(!modal);
  }

  return (
    <ModalContext.Provider value={{ modal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
