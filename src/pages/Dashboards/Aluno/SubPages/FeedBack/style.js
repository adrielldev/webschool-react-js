import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 10vw;
  gap: 15px;
  min-height: 80vh;
  padding-top: 50px;

  h2 {
    align-self: flex-start;
    width: 80vw;
    margin-top: -6vh;
    min-width: 300px;
    max-width: ${(props) => props.mw};
  }

  div {
    background-color: var(--pink-0);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    width: 80vw;
    min-width: 300px;
    max-width: ${(props) => props.mw};
    height: 60vh;
  }

  div > ul {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--blue-1);
      border-radius: 20px;
    }
  }

  div > li {
    display: flex;
  }

  div > h3 {
    display: flex;
    justify-content: center;
  }

  div > h3,
  div > ul > li,
  button {
    background-color: var(--blue-0);
    margin: 5px 10px;
    border-radius: 5px;
    padding: 10px;
  }

  div > ul > li > p {
    width: 65%;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }

  div > ul > li > span {
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    color: var(--black);
  }

  button {
    border: none;
    padding: 10px;
    font-weight: 700;
  }

  @media (min-width: 800px) {
    h2 {
      align-self: center;
    }
  }
`;
