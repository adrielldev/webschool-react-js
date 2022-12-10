import { Container, ThemeDiv } from "./style";

import { BiTrash } from "react-icons/bi";

import { apiPrivate } from "../../../../services/api";

import { toast } from "react-toastify";

const Card = ({ cadastro, vitrine, setVitrine, setType }) => {
  function remove() {
    apiPrivate.delete(`/users/${cadastro.id}`).then((_) => {
      const filter = vitrine.filter((user) => user.id !== cadastro.id);
      setVitrine(filter);
      setType("professor");
      toast.success("Usuário deletado");
    });
  }

  return (
    <Container
      bc="var(--blue-0)"
      br="8px"
      w="96%"
      h="40px"
      a="center"
      j="space-between"
      p="0px 0px 0px 20px"
    >
      {cadastro.type === "aluno" && (
        <>
          <p>
            {cadastro.registration} - {cadastro.name}
          </p>
          <ThemeDiv j="space-between" w="36%" p="0px 10px 0px 0px">
            <p>Aluno</p> <BiTrash onClick={remove} />
          </ThemeDiv>
        </>
      )}

      {cadastro.type === "professor" && (
        <>
          <p>
            {cadastro.matter} - {cadastro.name}
          </p>
          <ThemeDiv j="space-between" w="36%" p="0px 10px 0px 0px">
            <p>Professor</p> <BiTrash onClick={remove} />
          </ThemeDiv>
        </>
      )}

      {cadastro.type === "responsavel" && (
        <>
          <p>
            {cadastro.registration_son} - {cadastro.name}
          </p>
          <ThemeDiv j="space-between" w="36%" p="0px 10px 0px 0px">
            <p>Responsável</p> <BiTrash onClick={remove} />
          </ThemeDiv>
        </>
      )}
    </Container>
  );
};

export default Card;
