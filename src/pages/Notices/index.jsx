import { Container, SliderContainer, InfosContainer } from "./styles";

import ImageGallery from "react-image-gallery";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Notices = () => {
  const [dataImg, setDataImg] = useState([]);
  const [dataNoticias, setDataNoticias] = useState([]);
  const [indexNoticia, setIndexNoticia] = useState(0);

  useEffect(() => {
    api.get("/eventos").then((res) => {
      setDataNoticias(res.data);
      setDataImg(
        res.data.map((item) => {
          return {
            original: item.img,
            thumbnail: item.img,
          };
        })
      );
    });
  }, [dataNoticias]);

  function slide() {
    if (indexNoticia === dataNoticias.length - 1) {
      setIndexNoticia(0);
    } else {
      setIndexNoticia(indexNoticia + 1);
    }
  }

  return (
    <>
      <Header />

      <Container>
        <SliderContainer>
          <ImageGallery
            items={dataImg}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={slide}
            infinite={false}
          />
        </SliderContainer>
        <InfosContainer>
          <h1>{dataNoticias[indexNoticia]?.titulo}</h1>
          <p>{dataNoticias[indexNoticia]?.descricao}</p>
        </InfosContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Notices;
