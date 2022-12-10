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

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--blue-0);

  border-radius: 8px;
  width: 80%;
  padding: 20px;
  margin: 30px auto;

  box-sizing: border-box;

  animation: ${slideForm} 0.5s linear;
  transition: 0.3s;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.5rem;
  }

  .buttonRegister {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 2vh;
  }
`;
