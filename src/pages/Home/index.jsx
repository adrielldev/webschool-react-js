import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ThemeDiv, ThemeSection, ThemeTextDiv } from "./style";

import imgHome1 from "../../assets/Teaching-bro.svg";
import imgHome2 from "../../assets/Happy student-pana.svg";

const Home = () => {
  return (
    <>
      <Header />

      <ThemeSection f="column" a="center" g="10%" w="100%">
        <ThemeTextDiv f="column" g="10%" w="80%" a="center" m="30px">
          <ThemeDiv f="column" a="center" w="100%" g="30px" j="center">
            <h2>Quem somos ?</h2>
            <p>
              Somos a busca da informação e educação comum à todos e buscamos a
              reintegração e a participação ativa da sociedade na realidade
              escolástica que os contornam, trazendo à essa sociedade o senso de
              construção e percepção, enquanto às diversas realidades possíveis,
              alinhando o desenvolvimento integral das nossas crianças enquanto
              seres conscientes das diversas intersecções culturais que os
              rodeiam, assim como maior proteção, engajamento e possibilidades.
              Trazemos também o ensino/aprendizagem numa nova abordagem, sendo
              possível aos professores disponibilizar tarefas mais interativas,
              sinestésicas e mais intuitivas, garantindo o aprendizado de forma
              mais lúdica e relativo à realidade do aluno. Garantindo assim
              maior desenvolvimento não só aos alunos, mas à toda sociedade que
              os rodeiam.
            </p>
          </ThemeDiv>
          <img src={imgHome1} alt="Menina escrevendo no quadro" />
        </ThemeTextDiv>
        <ThemeTextDiv f="column" g="10%" w="80%" a="center" m="30px">
          <img className="img2" src={imgHome2} alt="Estudantes felizes" />
          <ThemeDiv
            f="column"
            a="center"
            m="0px 0px 40px 0px"
            g="30px"
            j="center"
          >
            <h2>Oque oferecemos ?</h2>
            <p>
              Fornecemos um programa de reintegração social, que busca trazer à
              realidade escolástica das crianças, não só os responsáveis, como
              também a sociedade que os contorna, trazendo consigo maior
              desenvolvimento e possibilidade aos alunos, maior engajamento para
              com a vida da escola (e as ações por ela promovida), como maior
              controle, transparência, direcionamento e um gerenciamento por
              parte dos responsáveis aos alunos, dado a facilidade de acesso à
              informação, podendo se tomar ações e medidas mais rápidas para
              auxiliar de fato o desenvolvimento cognitivo e intelectual das
              crianças.
            </p>
          </ThemeDiv>
        </ThemeTextDiv>
      </ThemeSection>

      <Footer />
    </>
  );
};

export default Home;
