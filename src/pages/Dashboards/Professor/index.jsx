import {
  Container,
  Content,
  TurmasContainer,
  TurmasHeaderContainer,
} from "./style";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import { api } from "../../../services/api";
import { UserContext } from "../../../contexts/User/UserContext";
import Footer from "../../../components/Footer";

const DashboardProfessor = () => {
  const token = JSON.parse(localStorage.getItem("@WebSchool:Token"));
  const [activeTurma, setActiveTurma] = useState("");

  const [turmas, setTurmas] = useState([]);
  const [alunos, setAlunos] = useState([]);

  const { userContext, setUserContext } = useContext(UserContext);

  useEffect(() => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
      .then((res) => {
        setUserContext(res.data);
        setTurmas(res.data.gang);
      })
      .catch((err) => console.error(err));
  }, []);

  function getAlunosTurma(gang) {
    api
      .get("/users?type=aluno", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setAlunos(res.data.filter((aluno) => aluno.gang === gang));
      })
      .catch((err) => console.error(err));
  }

  function setAlunoIDLocalStorage(id) {
    localStorage.setItem("@WebSchool:AlunoId", id);
  }

  function setAlunoNameLocalStorage(name) {
    localStorage.setItem("@WebSchool:AlunoName", name);
  }

  function setTurmaNumberLocalStorage(item) {
    localStorage.setItem("@WebSchool:Turma", item);
  }

  return (
    <>
      <Header rota={"/"} texto={"Sair"} />
      <Container>
        <Content>
          <h1>{`Olá, Professor ${userContext.name}`}</h1>
          <TurmasContainer>
            <TurmasHeaderContainer buttonDisplay={!activeTurma}>
              <h2>{`Turma ${activeTurma}` || "Turmas"}</h2>
              <button onClick={() => setActiveTurma("")}>X</button>
            </TurmasHeaderContainer>
            {activeTurma ? (
              <ul>
                {alunos.map((aluno) => (
                  <li key={aluno.id}>
                    <button
                      onClick={() => {
                        setAlunoNameLocalStorage(aluno.name);
                        setAlunoIDLocalStorage(aluno.id);
                      }}
                    >
                      <Link to={`/dashboard/professor/aluno`}>
                        {aluno.name}
                      </Link>
                    </button>
                  </li>
                ))}
              </ul>
            ) : typeof turmas != "string" ? (
              <ul>
                {turmas.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setTurmaNumberLocalStorage(item);
                        setActiveTurma(item);
                        getAlunosTurma(item);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </TurmasContainer>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default DashboardProfessor;
