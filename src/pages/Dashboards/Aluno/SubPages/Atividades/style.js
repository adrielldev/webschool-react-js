import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10vw;
  gap: 15px;
  height: 80vh;

  h2 {
    align-self: flex-start;
    width: 80vw;
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
    max-height: 65vh;
  }

  div > ul {
    overflow: auto;
    height: 30vh;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--blue-1);
      border-radius: 20px;
    }
  }

  div > ul > li {
    display: flex;
    height: 8vh;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    align-items: center;
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
    font-weight: 500;
  }

  div > ul > li > h4 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 16px;
    max-height: 32px;
  }

  div > ul > li > span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    color: var(--pink-2);
    text-decoration: underline;
  }

  button {
    border: none;
    padding: 10px;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 20vh;
    width: 100%;
    margin-top: -5vh;
    margin-bottom: 5vh;
  }

  form > textarea {
    width: 78%;
    height: 10vh;
  }

  form > button {
    width: 15%;
    height: 11vh;
  }

  @media (min-width: 800px) {
    h2 {
      align-self: center;
    }
  }
`;

export const DivFeedback = styled.div`
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  div > p {
    display: flex;
    width: fit-content;
    background-color: var(--blue-0);
    margin: 5px 10px;
    border-radius: 5px;
    padding: 10px;
    font-weight: 700;
  }

  div > button {
    display: flex;
    width: fit-content;
    background-color: var(--blue-0);
    margin: 5px 10px;
    border-radius: 5px;
    padding: 10px;
    
  }

  form > button {
    height: 11vh;
  }

  form > textarea {
    margin: 5px 10px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    min-height: 70px;
    height: 11vh;
  }

  @media (max-width: 764px) {
    form > textarea {
      width: 65%;
    }

    form > button {
      width: 20%;
    }
  }
`;
