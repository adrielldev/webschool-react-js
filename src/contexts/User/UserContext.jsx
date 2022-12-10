import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userContext, setUserContext] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <UserContext.Provider value={{ user, userContext, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};
