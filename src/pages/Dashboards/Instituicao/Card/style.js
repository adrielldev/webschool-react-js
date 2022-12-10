import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border-radius: ${(props) => props.br};

  background-color: ${(props) => props.bc};
`;

export const ThemeDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.j};

  width: ${(props) => props.w};

  padding: ${(props) => props.p};

  svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
