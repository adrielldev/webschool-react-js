import { useContext, useEffect, useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Link, TextField } from "@mui/material";

import { useHistory } from "react-router-dom";

import { RegisterInfoContext } from "../../contexts/register/RegisterInfoContext";

import { FormDiv, LeftDiv, RightDiv, StyledForm, StyledMain } from "./styles";

import { api } from "../../services/api";

import { toast } from "react-toastify";

import education from "../../assets/Education-rafiki.svg";

export const Register = () => {
  const [schools, setSchools] = useState({});
  const [emails, setEmails] = useState({});

  const { setInfoPartOne } = useContext(RegisterInfoContext);

  const history = useHistory();

  const schema = yup.object().shape({
    nome_escola: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Senha deve conter no mínimo 6 caracteres, pelo menos uma letra e um número."
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não coincidem"),
    codigo_acesso: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function registerSchool(data) {
    const { password, nome_escola, email, codigo_acesso } = data;
    const checkEmail = emails?.some((users) => users.email === data.email);
    const check = schools?.some(
      (school) => school.codigo_acesso === +data.codigo_acesso
    );

    if (check === true && checkEmail === false) {
      setInfoPartOne({ password, nome_escola, email, codigo_acesso });

      history.push(`/registerComplement`);
    } else if (check === false) {
      toast.error("codigo inválido");
    } else if (checkEmail === true) {
      toast.error("Email já cadastrado");
    }
  }

  useEffect(() => {
    api
      .get("/escolas")
      .then((res) => {
        setSchools(res.data);
      })
      .catch((_) => toast.error("Ops! estamos com problema no servidor."));
  }, []);

  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        setEmails(res.data);
      })
      .catch((error) => toast.error("Ops! estamos com problema no servidor."));
  }, [schools]);

  return (
    <>
      <StyledMain>
        <LeftDiv>
          <FormDiv>
            <h1>Registrar-se</h1>

            <StyledForm onSubmit={handleSubmit(registerSchool)}>
              <TextField
                label="Nome da escola"
                error={!!errors.nome_escola}
                helperText={errors?.nome_escola?.message}
                {...register("nome_escola")}
                sx={{ width: "100%" }}
              />

              <TextField
                label="Email institucional"
                error={!!errors.email}
                helperText={errors?.email?.message}
                {...register("email")}
                sx={{ width: "100%" }}
              />

              <TextField
                label="Senha"
                type="password"
                error={!!errors.password}
                helperText={errors?.password?.message}
                {...register("password")}
                sx={{ width: "100%" }}
              />

              <TextField
                label="Confirme a senha"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                {...register("confirmPassword")}
                sx={{ width: "100%" }}
              />

              <TextField
                type="number"
                label="Código de acesso"
                error={!!errors.codigo_acesso}
                helperText={errors?.codigo_acesso?.message}
                {...register("codigo_acesso")}
                sx={{ width: "100%" }}
              />

              <Button
                variant="contained"
                className="buttonRegister"
                type="submit"
              >
                Cadastrar
              </Button>

              <Link onClick={() => history.push("/")}>
                voltar para a página inicial
              </Link>
            </StyledForm>
          </FormDiv>
        </LeftDiv>

        <RightDiv>
          <img src={education} alt="education" />
        </RightDiv>
      </StyledMain>
    </>
  );
};
