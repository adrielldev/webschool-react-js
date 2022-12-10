import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  header {
    padding: 20px;
    width: 100%;
    height: 100px;
    background-color: var(--blue-1);
  }
`;

export const SliderContainer = styled.div`
  margin-top: 50px;
  .img-gallery-slides {
    img {
      width: 500px;
      height: 500px;
    }
  }

  .image-gallery-swipe {
    background: var(--black);
  }

  .image-gallery-image {
    width: 50vh;
  }
  width: 50%;

  @media (max-width: 768px) {
    .image-gallery-image {
      width: 50vh;
    }
    width: 60%;
  }

  @media (max-width: 425px) {
    .image-gallery-image {
      width: 40vh;
    }
    width: 80%;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 730px;
  h1 {
    text-decoration: underline;
  }
  p {
    text-align: center;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 305px;
  }
`;
