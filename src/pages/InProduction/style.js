import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    width: 80%;
    margin: 21px auto;

    img {
      width: 45%;
      height: 45%;
    }
  }
  footer {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    div {
      margin: 30px auto;
    }
  }

  @media (max-width: 768px) {
    div {
      margin: 46px auto;

      img {
        width: 55%;
        height: 55%;
      }
    }
  }

  @media (max-width: 425px) {
    div {
      margin: 48px auto;

      img {
        width: 75%;
        height: 75%;
        margin: 20px auto;
      }
    }
  }
`;
