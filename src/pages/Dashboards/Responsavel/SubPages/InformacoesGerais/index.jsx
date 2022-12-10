import { useEffect, useContext, useState } from "react";

import { Container } from "../../styles";

import Footer from "../../../../../components/Footer";
import Header from "../../Header";

import { UserContext } from "../../../../../contexts/User/UserContext";

import { api } from "../../../../../services/api";

const InfosPai = () => {
  const { userContext } = useContext(UserContext);

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    api
      .get("/infos", {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@WebSchool:Token")
          )}`,
        },
      })
      .then((res) => setInfos(res.data))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <Header rota="/dashboard/responsavel" texto="Voltar" />
      <Container mw="80vw">
        <h2 style={{ marginTop: "30px" }}>Olá, {userContext.name}</h2>
        <div className="infosPai">
          <h3>INFORMAÇÕES GERAIS</h3>
          <ul>
            {infos.length === 0 ? (
              <li>
                <p>Nenhuma informação cadastrada</p>
              </li>
            ) : (
              infos?.map((info, index) => (
                <li key={index}>
                  <p>{info.message}</p>
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

export default InfosPai;
