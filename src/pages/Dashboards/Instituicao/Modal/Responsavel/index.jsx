import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ThemeDiv,
  ThemeNav,
  ThemeMain,
  ThemeBackGround,
  ThemeForm,
} from "./style";

import { api } from "../../../../../services/api";
import { toast } from "react-toastify";

const ModalResponsavel = (prop) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo requerido"),
    email: yup.string().required("Campo requerido").email("E-mail inválido"),
    password: yup.string().required("Campo requerido"),
    twoPassword: yup
      .string()
      .required("Campo requerido")
      .oneOf([yup.ref("password")], "As Senhas são Diferentes"),
    registration_son: yup.string().required("Campo requerido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    delete data.twoPassword;
    data = { ...data, type: "responsavel" };

    api
      .post(`/register`, data)
      .then((_) => {
        prop.setType("professor");
        toast.success("Usuário adicionado");
        prop.setResponsavel();
      })
      .catch((_) => toast.error("Ops, algo deu errado"));
  };

  return (
    <ThemeBackGround
      className="responsavel"
      d={prop.dp}
      bc="var(--bg-modal)"
      w="100vw"
      h="100vh"
      j="center"
      a="center"
    >
      <ThemeMain f="column" w="335px" br="10px">
        <ThemeNav
          h="60px"
          a="center"
          bc="var(--pink-2)"
          j="flex-end"
          br="10px 10px 0px 0px"
        >
          <ThemeDiv j="space-between">
            <h2>Adicionar responsavel</h2>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                prop.setResponsavel();
              }}
            >
              X
            </p>
          </ThemeDiv>
        </ThemeNav>
        <ThemeForm
          onSubmit={handleSubmit(onSubmitFunction)}
          g="10px"
          p="30px 0px 30px 0px"
          f="column"
          bc="var(--blue-1)"
          j="center"
          a="center"
          br="0px 0px 10px 10px"
        >
          <input placeholder="Nome" {...register("name")} />
          {errors.name?.message}
          <input placeholder="E-mail" {...register("email")} />
          {errors.email?.message}
          <input placeholder="Senha" {...register("password")} />
          {errors.password?.message}
          <input placeholder="Repetir senha" {...register("twoPassword")} />
          {errors.twoPassword?.message}
          <input
            placeholder="Matrícula do filho"
            {...register("registration_son")}
          />
          {errors.registration_son?.message}

          <button type="submit">Enviar</button>
        </ThemeForm>
      </ThemeMain>
    </ThemeBackGround>
  );
};

export default ModalResponsavel;
