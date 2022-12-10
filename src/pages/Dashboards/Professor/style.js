import styled from "styled-components";

export const Container = styled.div`
  min-height: 78vh;
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 1.5rem;
  height: 400px;
  margin-bottom: 50px;

  h1 {
    margin-top: 50px;
  }
`;

export const TurmasContainer = styled.div`
  background-color: var(--pink-0);
  border-radius: 12px;
  padding: 15px;
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 250px;
  max-width: 50%;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  li {
    background-color: var(--blue-0);
    border-radius: 12px;
    padding: 15px;
    font-weight: 600;
    button {
      cursor: pointer;
      background: none;
      border: none;
      font-weight: 600;
      width: 100%;
    }

    h3 {
      text-align: left;
    }
  }
`;

export const TurmasHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  position: relative;
  button {
    display: ${(props) => (props.buttonDisplay ? "none" : "block")};

    background: none;
    border: none;
    top: 0;
    right: 0;
    position: absolute;
    padding: 5px 10px;

    font-size: large;

    background-color: var(--blue-0);

    border-radius: 10px;
  }
`;

export const FooterContainer = styled.div`
  margin-top: 200px;
`;
