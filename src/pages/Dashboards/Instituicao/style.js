import styled from "styled-components";

export const ThemeMain = styled.main`
  display: flex;
  flex-direction: ${(props) => props.f};
  gap: ${(props) => props.g};

  margin: ${(props) => props.m};

  button {
    color: var(--pink-1);
    border: none;
    width: auto;
    padding: 10px;
    font-size: 20px;
    background-color: var(--blue-0);
    border-radius: 10px;
  }

  button:hover {
    background-color: var(--blue-1);
    width: auto;
    padding: 10px;
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin: 80px 20px 200px 30px;
  }
`;

export const Container = styled.div`
  display: flex;

  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ThemeDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 5px;
    margin: 0px 10% 0px 0px;
  }
`;

export const ThemeUl = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  gap: ${(props) => props.g};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  background-color: ${(props) => props.bc};

  span {
    margin: 250px auto 0 auto;
    width: 270px;
    border-radius: 10px;
    background-color: var(--white);
    padding: 10px;
  }

  @media (min-width: 768px) {
    padding: 20px 0px 0px 0px;
    width: 60%;
    align-items: center;
  }
`;

export const ThemeNav = styled.div`
  display: flex;
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  overflow: auto;
  @media (min-width: 425px) {
    justify-content: center;
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 10px;
    margin: 0px 0px 0px 20%;
  }
`;
