import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  flex-direction: column;

  margin-top: 58px;

  margin-bottom: 90px;
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 1.5rem;
  height: fit-content;
  margin-bottom: 50px;
  background-color: var(--pink-0);
  border-radius: 12px;
  max-width: 1000px;
  width: 80%;

  padding: 30px;

  .imageAluno {
    width: 20%;
    height: 20%;

    box-sizing: border-box;

    border-radius: 100%;
  }

  .infosAtividadeProfessor {
    /* width: 30%; */

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5vh;
  }

  .infosAluno {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  .infosAluno > div {
    background-color: var(--blue-0);

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 10px;
    border-radius: 10px;

    gap: 5vh;
  }

  .optionsProfessor > form {
    background-color: var(--blue-0);

    display: flex;
    flex-direction: column;
    width: 35vh;

    gap: 5px;

    border-radius: 8px;
    padding: 10px;

    select,
    button {
      border: none;
      padding: 10px;
    }

    button {
      background-color: var(--pink-1);
      font-weight: 500;
      color: var(--body);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .imageAluno {
      width: 30vw;
      height: 30vw;
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;

    gap: 10px;
  }
`;

export const QuadroContainer = styled.div`
  width: 100%;
  height: fit-content;

  border: 2px solid var(--blue-0);
  border-radius: 8px;

  padding: 8px;

  box-shadow: 2px 3px 5px var(--blue-0);

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      display: flex;
      width: 100%;
      padding: 15px;
      justify-content: space-between;
      height: 90px;
      color: black;
      align-items: center;
      background-color: var(--blue-1);
      border-radius: 5px;
      h1 {
        font-size: 15px;
      }

      .editButton {
        border: none;

        width: 45px;
        height: 30px;

        border-radius: 10px;
        font-weight: 700;

        padding: 0 5px;
      }

      .buttonDelete {
        width: 30px;
        height: 30px;

        border: none;
        border-radius: 10px;

        svg {
          color: var(--error);
        }
      }
    }
  }

  @media (max-width: 375px) {
    li {
      flex-direction: column;
      font-size: 2vw;
    }
  }
`;

export const FooterContainer = styled.div`
  margin-top: 200px;
`;

export const ModalContainer = styled.div`
  .modal-add-notas {
    display: ${(props) =>
      props.modalAddNotas ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-notas-content {
    display: flex;
    flex-direction: column;

    background-color: var(--blue-1);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    border-radius: 10px;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: relative;

    .closeModalButton {
      width: 5%;
      height: 10%;

      position: absolute;
      top: 15px;
      right: 15px;

      border: none;
      border-radius: 10px;
      background-color: transparent;

      svg {
        color: var(--black);

        width: 100%;
        height: 3vh;

        &:hover {
          color: var(--error);
        }
      }
    }

    .inputsModal {
      display: flex;
      flex-direction: column;

      h2 {
        margin-bottom: 100px;
      }
    }

    .inputsModal > form {
      margin-bottom: 6vh;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      width: 100%;
    }

    form > input {
      padding: 5px 10px;

      border: none;
      border-radius: 10px;
    }

    form > button {
      border: none;
      border-radius: 8px;

      background-color: var(--pink-0);
      padding: 5px 10px;

      font-weight: 700;
    }

    @media (max-width: 425px) {
      width: 80%;

      & input {
        width: 100%;
      }
    }
  }

  .modal-add-ativs {
    display: ${(props) =>
      props.modalAddAtivs ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-ativs-content {
    display: flex;
    flex-direction: column;

    background-color: var(--blue-1);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    border-radius: 10px;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: relative;

    .closeModalButton {
      width: 5%;
      height: 10%;

      position: absolute;
      top: 15px;
      right: 15px;

      border: none;
      border-radius: 10px;
      background-color: transparent;

      svg {
        color: var(--black);

        width: 100%;
        height: 3vh;

        &:hover {
          color: var(--error);
        }
      }
    }

    .inputsModal {
      display: flex;
      flex-direction: column;
    }

    .inputsModal > form {
      margin-bottom: 6vh;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      width: 100%;
    }

    .inputsModal > h2 {
      margin-bottom: 5vh;
    }

    form > input {
      padding: 5px 10px;

      border: none;
      border-radius: 10px;
    }

    form > button {
      border: none;
      border-radius: 8px;

      background-color: var(--pink-0);
      padding: 5px 10px;

      font-weight: 700;
    }

    @media (max-width: 425px) {
      width: 80%;

      & input {
        width: 100%;
      }
    }
  }

  .modal-add-feed {
    display: ${(props) =>
      props.modalAddFeed ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-feed-content {
    display: flex;
    flex-direction: column;

    background-color: var(--blue-1);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    border-radius: 10px;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: relative;

    .closeModalButton {
      width: 5%;
      height: 10%;

      position: absolute;
      top: 15px;
      right: 15px;

      border: none;
      border-radius: 10px;
      background-color: transparent;

      svg {
        color: var(--black);

        width: 100%;
        height: 3vh;

        &:hover {
          color: var(--error);
        }
      }
    }

    .inputsModal {
      display: flex;
      flex-direction: column;
    }

    .inputsModal > form {
      margin-bottom: 6vh;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      width: 100%;
    }

    .inputsModal > h2 {
      margin-bottom: 5vh;
    }

    form > input {
      padding: 5px 10px;

      border: none;
      border-radius: 10px;
    }

    form > button {
      border: none;
      border-radius: 8px;

      background-color: var(--pink-0);
      padding: 5px 10px;

      font-weight: 700;
    }

    @media (max-width: 425px) {
      width: 80%;

      & input {
        width: 100%;
      }
    }
  }

  .modal-add-infos {
    display: ${(props) =>
      props.modalAddInfos ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-infos-content {
    display: flex;
    flex-direction: column;

    background-color: var(--blue-1);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    border-radius: 10px;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: relative;

    .closeModalButton {
      width: 5%;
      height: 10%;

      position: absolute;
      top: 15px;
      right: 15px;

      border: none;
      border-radius: 10px;
      background-color: transparent;

      svg {
        color: var(--black);

        width: 100%;
        height: 3vh;

        &:hover {
          color: var(--error);
        }
      }
    }

    .inputsModal {
      display: flex;
      flex-direction: column;
    }

    .inputsModal > form {
      margin-bottom: 6vh;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      width: 100%;
    }

    .inputsModal > h2 {
      margin-bottom: 5vh;
    }

    form > input {
      padding: 5px 10px;

      border: none;
      border-radius: 10px;
    }

    form > button {
      border: none;
      border-radius: 8px;

      background-color: var(--pink-0);
      padding: 5px 10px;

      font-weight: 700;
    }

    @media (max-width: 425px) {
      width: 80%;

      & input {
        width: 100%;
      }
    }
  }

  .modal-edit-notas {
    display: ${(props) =>
      props.modalEditNotas ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  .modal-edit-notas-content {
    display: flex;
    flex-direction: column;

    background-color: var(--blue-1);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    border-radius: 10px;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: relative;

    .closeModalButton {
      width: 5%;
      height: 10%;

      position: absolute;
      top: 15px;
      right: 15px;

      border: none;
      border-radius: 10px;
      background-color: transparent;

      svg {
        color: var(--black);

        width: 100%;
        height: 3vh;

        &:hover {
          color: var(--error);
        }
      }
    }

    .inputsModal {
      display: flex;
      flex-direction: column;
    }

    .inputsModal > form {
      margin-bottom: 6vh;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      width: 100%;
    }

    .inputsModal > h2 {
      margin-bottom: 5vh;
    }

    form > input {
      padding: 5px 10px;

      border: none;
      border-radius: 10px;
    }

    form > button {
      border: none;
      border-radius: 8px;

      background-color: var(--pink-0);
      padding: 5px 10px;

      font-weight: 700;
    }

    @media (max-width: 425px) {
      width: 80%;

      & input {
        width: 100%;
      }
    }
  }

  .modal-edit-feed {
    display: ${(props) =>
      props.modalEditFeed ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  .modal-edit-feed-content {
    display: flex;
    flex-direction: column;

    background-color: var(--blue-1);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    border-radius: 10px;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: relative;

    .closeModalButton {
      width: 5%;
      height: 10%;

      position: absolute;
      top: 15px;
      right: 15px;

      border: none;
      border-radius: 10px;
      background-color: transparent;

      svg {
        color: var(--black);

        width: 100%;
        height: 3vh;

        &:hover {
          color: var(--error);
        }
      }
    }

    .inputsModal {
      display: flex;
      flex-direction: column;
    }

    .inputsModal > form {
      margin-bottom: 6vh;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      width: 100%;
    }

    .inputsModal > h2 {
      margin-bottom: 5vh;
    }

    form > input {
      padding: 5px 10px;

      border: none;
      border-radius: 10px;
    }

    form > button {
      border: none;
      border-radius: 8px;

      background-color: var(--pink-0);
      padding: 5px 10px;

      font-weight: 700;
    }

    @media (max-width: 425px) {
      width: 80%;

      & input {
        width: 100%;
      }
    }
  }
`;
