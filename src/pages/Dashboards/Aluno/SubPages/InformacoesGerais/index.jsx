import React, { useContext, useEffect, useState } from "react";
import { Container } from "./style";

import Header from "../../Header";
import Footer from "../../../../../components/Footer";

import { api } from "../../../../../services/api";

import { UserContext } from "../../../../../contexts/User/UserContext";

const InfoGerais = () => {
  const { userContext } = useContext(UserContext);

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    api
      .get("/infos", {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@WebSchool:Token")
          )}`,
        },
      })
      .then((res) => setInfos(res.data));
  }, []);

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />

      <Container mw="1000px">
        <h2>Olá, {userContext.name}</h2>
        <div className="infosPai">
          <h3>INFORMAÇÕES GERAIS</h3>
          <ul>
            {infos?.map((info, index) => (
              <li key={index}>
                <p>{info.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default InfoGerais;
