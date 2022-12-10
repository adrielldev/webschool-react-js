import { useContext, useEffect, useState } from "react";

import Header from "../../Header";
import Footer from "../../../../../components/Footer";

import { Container } from "../../styles";

import { api } from "../../../../../services/api";
import { UserContext } from "../../../../../contexts/User/UserContext";

const NotasPai = () => {
  const { userContext } = useContext(UserContext);

  const [id, setId] = useState("");
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    api
      .get(`/users?registration=${userContext.registration_son}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@WebSchool:Token")
          )}`,
        },
      })
      .then((res) => {
        setId(res.data[0].id);
      })
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    if (!!id) {
      api
        .get(`/notas?UserId=${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("@WebSchool:Token")
            )}`,
          },
        })
        .then((res) => setNotas(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  return (
    <>
      <Header rota="/dashboard/responsavel" texto="Voltar" />
      <Container mw="800px">
        <h2 style={{ marginTop: "30px" }}>Olá, {userContext.name}</h2>

        <div>
          <h3>Notas</h3>
          <ul>
            {notas.length === 0 ? (
              <li>
                <p>Nenhuma nota cadastrada</p>
              </li>
            ) : (
              notas?.map((nota) => (
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

export default NotasPai;
