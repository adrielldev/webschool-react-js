import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 80vh;

  h4 {
    text-align: center;
    background-color: var(--blue-0);
    margin: 10px 10px;
    border-radius: 5px;
    padding: 10px;
  }

  h2 {
    align-self: center;
    width: 80vw;
    min-width: 300px;
    max-width: ${(props) => props.mw};
  }

  div {
    background-color: var(--pink-0);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
    min-width: 300px;
    max-width: ${(props) => props.mw};
    height: 50vh;
    max-height: 65vh;
  }

  div > ul {
    overflow: auto;
    width: 100%;
  }

  div > h3 {
    display: flex;
    justify-content: center;
    height: 6vh;
  }

  div > h3,
  div > ul > li,
  button {
    background-color: var(--blue-0);
    margin: 10px 10px;
    border-radius: 5px;
    padding: 10px;
  }

  div > ul > li > p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }

  div > ul > li > span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    color: var(--pink-2);
    text-decoration: underline;
  }

  button {
    border: none;
    padding: 10px;
    font-weight: 700;
  }

`;
