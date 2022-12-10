import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../components/Footer";
import { UserContext } from "../../../contexts/User/UserContext";
import { api } from "../../../services/api";
import { GoGraph } from "react-icons/go";
import { GiTalk } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { BsJournalBookmark } from "react-icons/bs";
import Header from "./Header";
import { ThemeMain, ThemeDiv, Container } from "./style.js";
const Aluno = () => {
  const history = useHistory();
  const { setUserContext } = useContext(UserContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
      .then((res) => {
        setUser(res.data);
        setUserContext(res.data);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header rota="/" texto="Sair" />
      <ThemeMain f="column" a="center" h="71vh" j="center">
        <h1>Olá, {user.name} </h1>
        <Container
          w="90%"
          f="column"
          br="10px"
          p="20px 20px 20px 20px"
          g="15px"
          bc="var(--pink-0)"
        >
          <ThemeDiv onClick={() => history.push("/dashboard/aluno/notas")}>
            <GoGraph />
            <h2>Notas</h2>
          </ThemeDiv>
          <ThemeDiv onClick={() => history.push("/dashboard/aluno/feedBack")}>
            <GiTalk />
            <h2>FeedBacks</h2>
          </ThemeDiv>
          <ThemeDiv onClick={() => history.push("/dashboard/aluno/infoGerais")}>
            <BsInfoCircle />
            <h2>Informações Gerais</h2>
          </ThemeDiv>
          <ThemeDiv onClick={() => history.push("/dashboard/aluno/atividades")}>
            <BsJournalBookmark />
            <h2>Atividades</h2>
          </ThemeDiv>
        </Container>
        <Footer />
      </ThemeMain>
    </>
  );
};
export default Aluno;
