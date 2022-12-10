import styled from "styled-components";

export const ThemeMain = styled.main`
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
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};
  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};
  background-color: ${(props) => props.bc};

  h1 {
    margin: 10px 0px;
    width: 90%;
  }

  footer {
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    h1 {
      width: 600px;
    }
  }
`;
export const ThemeDiv = styled.div`
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
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};
  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};
  background-color: var(--white);
  padding: 15px;
  border-radius: 10px;
  svg {
    width: 4vh;
    height: 4vh;
    margin-right: 15px;
  }
  cursor: pointer;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  margin: ${(props) => props.m};
  border-radius: ${(props) => props.br};
  background-color: ${(props) => props.bc};
  text-align: start;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;
