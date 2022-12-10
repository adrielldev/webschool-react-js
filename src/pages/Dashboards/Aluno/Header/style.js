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

export const ThemeTitle = styled.div`
  display: flex;
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};

  width: ${(props) => props.w};

  button {
    background: var(--pink-0);
    border-radius: 10px;
    border: none;
    font-size: 22px;
    padding: 10px 20px;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
`;
