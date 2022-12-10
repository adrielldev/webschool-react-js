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

const ModalAluno = (prop) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo requerido"),
    email: yup.string().required("Campo requerido").email("E-mail inválido"),
    password: yup.string().required("Campo requerido"),
    twoPassword: yup
      .string()
      .required("Campo requerido")
      .oneOf([yup.ref("password")], "As Senhas são Diferentes"),
    gang: yup.string().required("Campo requerido"),
    shift: yup.string().required("Campo requerido"),
    registration: yup.string().required("Campo requerido"),
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
    data = { ...data, type: "aluno" };

    api
      .post("/register", data)
      .then((_) => {
        prop.setType("professor");
        toast.success("Usuário adicionado");
        prop.setAluno();
      })
      .catch((_) => toast.error("Ops, algo deu errado!"));
  };

  function geradorMatricula() {
    const today = new Date();
    const [Milliseconds, Seconds, Minutes, year] = [
      today.getMilliseconds(),
      today.getSeconds(),
      today.getMinutes(),
      today.getFullYear(),
    ];
    const matricula =
      JSON.stringify(year) +
      JSON.stringify(Minutes) +
      JSON.stringify(Seconds) +
      JSON.stringify(Milliseconds);

    return matricula;
  }

  return (
    <ThemeBackGround
      className="aluno"
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
            <h2>Adicionar Aluno</h2>
            <p
              onClick={() => {
                prop.setAluno();
              }}
            >
              X
            </p>
          </ThemeDiv>
        </ThemeNav>
        <ThemeForm
          onSubmit={handleSubmit(onSubmitFunction)}
          g="15px"
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
          <input placeholder="Turma" {...register("gang")} />
          {errors.gang?.message}
          <input placeholder="Turno" {...register("shift")} />
          {errors.shift?.message}
          <input
            placeholder="Matrícula"
            {...register("registration")}
            value={geradorMatricula()}
          />
          {errors.registration?.message}
          <button type="submit">Enviar</button>
        </ThemeForm>
      </ThemeMain>
    </ThemeBackGround>
  );
};

export default ModalAluno;
