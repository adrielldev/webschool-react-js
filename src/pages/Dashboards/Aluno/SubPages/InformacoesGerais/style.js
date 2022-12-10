import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10vw;
  gap: 15px;
  min-height: 80vh;

  h2 {
    align-self: flex-start;
    width: 80vw;
    min-width: 300px;
    max-width: ${(props) => props.mw};
    margin-top: 50px;
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
    max-height: 65vh;
  }

  div > ul {
    overflow: auto;
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
    color: var(--black);
    text-decoration: underline;
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
