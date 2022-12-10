import { createContext, useState } from "react";

export const RegisterInfoContext = createContext({});

export const RegisterInfoProvider = ({ children }) => {
  const [infoPartOne, setInfoPartOne] = useState({});
  const [infoPartTwo, setInfoPartTwo] = useState({});

  return (
    <RegisterInfoContext.Provider
      value={{ infoPartOne, setInfoPartOne, infoPartTwo, setInfoPartTwo }}
    >
      {children}
    </RegisterInfoContext.Provider>
  );
};
