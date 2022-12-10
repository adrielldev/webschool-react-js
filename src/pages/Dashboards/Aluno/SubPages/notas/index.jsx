import React, { useContext, useEffect, useState } from "react";

import { Container } from "./style";

import { UserContext } from "../../../../../contexts/User/UserContext";

import { apiPrivate } from "../../../../../services/api";

import Footer from "../../../../../components/Footer";
import Header from "../../Header";

const Notas = () => {
  const [notas, setNotas] = useState([]);
  const { userContext } = useContext(UserContext);

  useEffect(() => {
    apiPrivate
      .get(`/notas?userId=${userContext.id}`)
      .then((res) => setNotas(res.data))
      .catch((err) => console.error(err));
  }, [userContext.id]);

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="800px">
        <h2>Olá, {userContext.name}</h2>
        <div>
          <h3>Notas</h3>
          <ul>
            {notas.length === 0 ? (
              <h4>Nenhuma nota cadastrada</h4>
            ) : (
              notas.map((nota) => (
                <li key={nota.id}>
                  <p>
                    {nota.materia} <span>{nota.nota} PONTOS</span>
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Notas;
