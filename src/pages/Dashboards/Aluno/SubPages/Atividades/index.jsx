import { useContext, useEffect } from "react";

import Header from "../../Header";
import Footer from "../../../../../components/Footer";

import { api, apiPrivate } from "../../../../../services/api";

import { Container, DivFeedback } from "./style";

import { useState } from "react";
import { UserContext } from "../../../../../contexts/User/UserContext";

const Atividades = () => {
  const { userContext } = useContext(UserContext);

  const [atividades, setAtividades] = useState([]);
  const [valueFeedback, setValueFeedback] = useState("");

  useEffect(() => {
    api
      .get(`/atividades?userId=${userContext.id}`, {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@WebSchool:Token")
          )}`,
        },
      })
      .then((res) => setAtividades(res.data))
      .catch((err) => console.error(err));
  }, []);

  function postFeedback(value) {
    const newFeedback = {
      name: userContext.name,
      feedback: value,
      userId: JSON.parse(localStorage.getItem("@WebSchool:UserId")),
    };
    apiPrivate.post("/atividades", newFeedback).then((res) => {
      setValueFeedback("");
      setAtividades([...atividades, res.data]);
    });
  }

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="1000px">
        <h2>Olá, {userContext.name}</h2>
        <div>
          <h3>atividades</h3>
          <ul>
            {atividades === [] ? (
              <p>Nenhuma ativivade no momento</p>
            ) : (
              atividades?.map((feed) => (

                feed.type === 'professor' ? (

                <li key={feed.id}>
                  <p>
                    PROFESSOR - {feed.name}
                  </p>

                  <h4>{feed.title}</h4>
                  <a href={feed.url_atividade} target="_blank">
                    atividade
                  </a>
                </li>) : (
                <li key={feed.id}>
                  <p>
                    ALUNO - {feed.name}
                  </p>
                  
                  <h4>{feed.feedback}</h4>
                  
                </li>)
              ))
            )}
          </ul>
          <DivFeedback>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                postFeedback(valueFeedback);
              }}
            >
              <div>
                <p>Enviar resposta</p>
              </div>
              <textarea
                placeholder="Responda as atividades"
                onChange={(event) => setValueFeedback(event.target.value)}
                value={valueFeedback}
              />
              <button type="submit">Enviar</button>
            </form>
          </DivFeedback>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Atividades;
