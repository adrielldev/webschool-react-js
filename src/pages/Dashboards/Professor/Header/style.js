import styled from "styled-components";

export const ThemeHeaderProfessor = styled.header`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b || "none"};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  img {
    width: 200px;
    height: 40px;
  }
  .button1 {
    display: flex;
    width: 50px;
    height: 50px;
  }
  .react-modal {
    background-color: black;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ReactModal__Overlay {
    background-color: var(--grey-1);
  }
  .nav {
    display: none;
  }
  @media (min-width: 768px) {
    .button1 {
      display: none;
      width: 40px;
      height: 40px;
    }
    .nav {
      display: flex;
    }
  }
`;

export const ThemeTitleProfessor = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  button {
    background: var(--pink-0);
    border-radius: 10px;
    font-size: 22px;
    padding: 10px 20px;

    border: none;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
`;
