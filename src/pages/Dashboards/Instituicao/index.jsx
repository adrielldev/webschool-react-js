import React, { useEffect, useState } from "react";

import { Container, ThemeDiv, ThemeNav, ThemeMain, ThemeUl } from "./style";

import { apiPrivate } from "../../../services/api";

import Card from "./Card/index";
import ModalAluno from "./Modal/Aluno";
import ModalProfessor from "./Modal/Professor";
import ModalResponsavel from "./Modal/Responsavel";
import HeaderInstitucional from "./HeaderIntitucional";
import Footer from "../../../components/Footer";

const Instituicao = () => {
  const [aluno, setAluno] = useState(false);
  const [professor, setProfessor] = useState(false);
  const [responsavel, setResponsavel] = useState(false);
  const [vitrine, setVitrine] = useState([]);
  const [type, setType] = useState("professor");

  useEffect(() => {
    apiPrivate
      .get(`/users?type=${type}`)
      .then((res) => {
        setVitrine(res.data);
      })
      .catch((err) => console.error(err));
  }, [type, professor]);

  function openAluno() {
    setAluno(!aluno);
  }

  function openProfessor() {
    setProfessor(!professor);
  }
  function openResponsavel() {
    setResponsavel(!responsavel);
  }

  return (
    <>
      <HeaderInstitucional />
      <ThemeMain f="column" g="20px" m="80px 10px 200px 10px">
        <ThemeDiv fd="column" j="center" g="5px">
          <button
            onClick={() => {
              openProfessor();
            }}
          >
            Adicionar professor
          </button>
          <button
            onClick={() => {
              openAluno();
            }}
          >
            Adicionar aluno
          </button>
          <button
            onClick={() => {
              openResponsavel();
            }}
          >
            Adicionar responsável
          </button>
        </ThemeDiv>

        <ThemeNav g="10px" j="flex-start">
          <button
            onClick={() => setType("professor")}
            style={{ background: type === "professor" && "var(--blue-1)" }}
          >
            Professores
          </button>
          <button
            onClick={() => setType("aluno")}
            style={{ background: type === "aluno" && "var(--blue-1)" }}
          >
            Alunos
          </button>
          <button
            onClick={() => setType("responsavel")}
            style={{ background: type === "responsavel" && "var(--blue-1)" }}
          >
            Responsável
          </button>
        </ThemeNav>
        <Container f="column" a="center">
          <ThemeUl
            oy="auto"
            p="20px 0px 0px 20px"
            f="column"
            g="10px"
            bc="var(--pink-1)"
            w="100%"
            h="600px"
            br="15px"
          >
            {vitrine.length === 0 ? (
              <span>Nenhum resultado foi encontrado!</span>
            ) : (
              <>
                {vitrine.map((e, index) => (
                  <Card
                    key={index * 3.14}
                    cadastro={e}
                    vitrine={vitrine}
                    setVitrine={setVitrine}
                    setType={setType}
                  />
                ))}
              </>
            )}
          </ThemeUl>
        </Container>
      </ThemeMain>

      <ModalAluno
        dp={aluno ? "flex" : "none"}
        setAluno={openAluno}
        setType={setType}
      />

      <ModalProfessor
        dp={professor ? "flex" : "none"}
        setProfessor={openProfessor}
        setVitrine={setVitrine}
        setType={setType}
      />

      <ModalResponsavel
        dp={responsavel ? "flex" : "none"}
        setResponsavel={openResponsavel}
        setVitrine={setVitrine}
        setType={setType}
      />

      <Footer />
    </>
  );
};

export default Instituicao;
