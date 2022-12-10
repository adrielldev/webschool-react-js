import styled from "styled-components";

export const ThemeHeader = styled.header`
  display: flex;
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

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

export const ThemeDiv = styled.div`
  display: flex;
  align-items: ${(props) => props.a};
  gap: ${(props) => props.g};

  width: ${(props) => props.w};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};

  margin: ${(props) => props.m};

  &:hover {
    background-color: ${(props) => props.bch};
  }

  button {
    background: none;
    border: none;
    font-size: 17px;
  }

  button:hover {
    text-decoration: underline;
    color: var(--pink-2);
  }
`;

export const ThemeTitle = styled.div`
  display: flex;
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};

  width: ${(props) => props.w};

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  display: ${(props) => props.d};
  flex-direction: ${(props) => props.f};
  background-color: ${(props) => props.bc};

  min-width: 100%;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;

  .icon {
    color: var(--black);
    width: 30px;
    height: 30px;
  }
`;
