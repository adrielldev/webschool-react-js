import styled, { keyframes } from "styled-components";

const slideForm = keyframes`
  0%{
    transform: translateX(-50px);
    opacity: 0;
  }

  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const StyledMain = styled.main`
  display: flex;

  height: 100vh;
`;

export const LeftDiv = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--blue-0);

  border-radius: 8px;
  width: 70%;
  padding: 20px;

  box-sizing: border-box;

  h1 {
    font-weight: 400;
    margin-bottom: 20px;
  }

  animation: ${slideForm} 0.5s linear;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 80%;

    h1 {
      margin-bottom: 20px;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 25px;
  width: 90%;

  box-sizing: border-box;

  .buttonRegister {
    background-color: var(--pink-0);
    color: var(--white);

    border: none;
    border-radius: 8px;

    width: 100%;
    background-color: var(--pink-0);
    color: var(--body);
    margin-top: 15px;

    &:hover {
      background-color: var(--pink-1);
      transition: 0.3s;
    }

    span {
      position: inherit;
    }
  }

  input {
    background-color: var(--body);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    background-color: var(--body);
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 80%;

    gap: 13px;
  }
`;

export const RightDiv = styled.div`
  background-color: var(--blue-0);

  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  img {
    width: 80%;
    height: 80vh;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
