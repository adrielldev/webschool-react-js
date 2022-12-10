import styled from "styled-components";

export const ThemeFooter = styled.footer`
  display: flex;
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  background-color: ${(props) => props.bc};

  .contact {
    display: none;
  }
  @media (min-width: 768px) {
    .contact {
      display: flex;
    }
  }
`;
export const ThemeDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.j};

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
`;
