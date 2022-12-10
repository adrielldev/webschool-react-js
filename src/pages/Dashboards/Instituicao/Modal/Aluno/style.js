import styled from "styled-components";

export const ThemeBackGround = styled.div`
  display: ${(props) => props.d};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  background-color: ${(props) => props.bc};

  min-width: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
`;

export const ThemeMain = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};

  width: ${(props) => props.w};
  border-radius: ${(props) => props.br};

  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const ThemeDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.j};

  color: var(--pink-1);
  width: 76%;
`;

export const ThemeForm = styled.form`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};

  padding: ${(props) => props.p};
  border-radius: ${(props) => props.br};

  background-color: ${(props) => props.bc};
  color: var(--pink-1);

  input {
    width: 300px;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 0px 0px 0px 10px;
    outline: none;
    padding-left: 15px;
  }
  select {
    width: 300px;
    height: 40px;
    border-radius: 8px;
    border: none;
  }
  button {
    font-size: 20px;
    width: 300px;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: var(--pink-1);
  }
`;

export const ThemeNav = styled.div`
  display: flex;
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  height: ${(props) => props.h};

  border-radius: ${(props) => props.br};

  background-color: ${(props) => props.bc};
  color: var(--pink-1);

  p {
    margin-right: 20px;
    font-size: 24px;
    color: var(--white);
  }
  h2 {
    color: var(--white);
  }
`;
