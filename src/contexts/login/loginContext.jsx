import { createContext } from "react";

import axios from 'axios'

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import { api } from '../../services/api.js'

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {

  const history = useHistory()
  
  function Login(formLogin) {
    api
      .post("/login", formLogin)
      .then((response) => {
        localStorage.setItem(
          "@WebSchool:Token",
          JSON.stringify(response.data.accessToken)
        );

        localStorage.setItem(
          "@WebSchool:UserId",
          JSON.stringify(response.data.user.id)
        );
          console.log(response.data);
        toast.success("Entrando na aplicação");

        setTimeout(() => {
          history.push(`/dashboard/${response.data.user.type}`);
        }, 2500);
      })
      .catch((_) => toast.error("E-mail ou Senha incorretos"));
  }

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};
