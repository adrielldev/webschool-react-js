import Footer from "../../components/Footer";
import { Container } from "./style";

import construction from "../../assets/At the office-amico.svg";
import Header from "../Dashboards/Aluno/Header";

export const InProduction = () => {
  return (
    <>
      <Header rota="/" texto="Voltar" />
      <Container>
        <div>
          <h1>Página em desenvolvimento!</h1>
          <img src={construction} alt="construction page" />
          <p>Desculpe o transtorno.</p>
        </div>
        <Footer />
      </Container>
    </>
  );
};
