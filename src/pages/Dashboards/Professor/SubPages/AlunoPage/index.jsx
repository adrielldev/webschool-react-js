import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  Content,
  InfosContainer,
  QuadroContainer,
  ModalContainer,
} from "./style";

import { api } from "../../../../../services/api";

import { toast } from "react-toastify";
import Header from "../../Header";

import imagemAluno from "../../../../../assets/imagemAluno.jpg";
import { useContext } from "react";
import { UserContext } from "../../../../../contexts/User/UserContext";

import { FiTrash } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Footer from "../../../../../components/Footer";

const AlunoPage = () => {
  const [FeedId, setFeedId] = useState();
  const [notaId, setNotaId] = useState();

  const [notas, setNotas] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [infos, setInfos] = useState([]);
  const [ativs, setAtivs] = useState([]);

  const [option, setOption] = useState("Notas");

  const [modalAddNotas, setModalAddNotas] = useState(false);
  const [modalAddAtivs, setModalAddAtivs] = useState(false);
  const [modalAddInfos, setModalAddInfos] = useState(false);
  const [modalAddFeed, setModalAddFeed] = useState(false);
  const [modalEditNotas, setModalEditNotas] = useState(false);
  const [modalEditFeed, setModalEditFeed] = useState(false);

  const { register, handleSubmit } = useForm();

  const alunoName = localStorage.getItem("@WebSchool:AlunoName");
  const turma = localStorage.getItem("@WebSchool:Turma");

  const { userContext } = useContext(UserContext);

  const onSubmitFunction = (data) => {
    switch (data.option) {
      case "Notas":
        api
          .get(
            `/notas?userId=${JSON.parse(
              localStorage.getItem("@WebSchool:AlunoId")
            )}`,
            {
              headers: {
                Authorization:
                  "Bearer " +
                  JSON.parse(localStorage.getItem("@WebSchool:Token")),
              },
            }
          )
          .then((res) => {
            setNotas(res.data);
            setFeedbacks(false);
            setAtivs(false);
            setInfos(false);
          })
          .catch((err) => console.log(err));
        break;

      case "Feed":
        api
          .get(
            `/feedback?userId=${JSON.parse(
              localStorage.getItem("@WebSchool:AlunoId")
            )}`,
            {
              headers: {
                Authorization:
                  "Bearer " +
                  JSON.parse(localStorage.getItem("@WebSchool:Token")),
              },
            }
          )
          .then((res) => {
            setNotas(false);
            setFeedbacks(res.data);
            setAtivs(false);
            setInfos(false);
          })
          .catch((err) => console.log(err));
        break;

      case "Atividades":
        api
          .get(
            `/atividades?userId=${JSON.parse(
              localStorage.getItem("@WebSchool:AlunoId")
            )}`,
            {
              headers: {
                Authorization:
                  "Bearer " +
                  JSON.parse(localStorage.getItem("@WebSchool:Token")),
              },
            }
          )
          .then((res) => {
            setAtivs(res.data);
            setNotas(false);
            setFeedbacks(false);
            setInfos(false);
          })
          .catch((err) => console.log(err));

        break;

      case "Infos Gerais":
        api
          .get("/infos", {
            headers: {
              Authorization:
                "Bearer " +
                JSON.parse(localStorage.getItem("@WebSchool:Token")),
            },
          })
          .then((res) => {
            setInfos(res.data);
            setAtivs(false);
            setNotas(false);
            setFeedbacks(false);
          })
          .catch((err) => console.log(err));

        break;
      default:
        break;
    }
  };

  const onSubmitAddNotaFunction = (data) => {
    const objNota = {
      materia: data.materia,
      nota: data.nota,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    api
      .post("/notas", objNota, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setNotas([...notas, res.data]);
        setModalAddNotas(false);
        toast.success("Nota adicionada!");
      })
      .catch((err) => console.log(err));
  };

  const onSubmitAddFeedFunction = (data) => {
    const objFeed = {
      feedback: data.feedback,
      name: data.name,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    api
      .post("/feedback", objFeed, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setFeedbacks([...feedbacks, res.data]);
        setModalAddFeed(false);
        toast.success("Feedback adicionado!");
      })
      .catch((err) => console.log(err));
  };

  const onSubmitAddAtivFunction = (data) => {
    const objAtiv = {
      name: userContext.name,
      type: userContext.type,
      title: data.nome_atividade,
      url_atividade: data.url_atividade,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    api
      .post("/atividades", objAtiv, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setAtivs([...ativs, res.data]);
        setModalAddAtivs(false);
        toast.success("Atividade adicionada!");
      })
      .catch((err) => console.log(err));
  };

  const onSubmitAddInfoFunction = (data) => {
    const objInfo = {
      message: data.message,
    };

    api
      .post("/infos", objInfo, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setInfos([...infos, res.data]);
        setModalAddInfos(false);
        toast.success("Info adicionada!");
      })
      .catch((err) => console.log(err));
  };

  const deleteNota = (id) => {
    api
      .delete(`/notas/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setNotas(notas.filter((nota) => nota.id !== id));
        toast.success("Nota deletada!");
      })
      .catch((err) => console.log(err));
  };

  const deleteFeed = (id) => {
    api
      .delete(`/feedback/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
        toast.success("Feedback deletado!");
      })
      .catch((err) => console.log(err));
  };

  const deleteAtiv = (id) => {
    api
      .delete(`/atividades/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setAtivs(ativs.filter((ativs) => ativs.id !== id));
        toast.success("Atividade deletada!");
      })
      .catch((err) => console.log(err));
  };

  const deleteInfo = (id) => {
    api
      .delete(`/infos/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setInfos(infos.filter((infos) => infos.id !== id));
        toast.success("Info deletada!");
      })
      .catch((err) => console.log(err));
  };

  const addToAluno = (option) => {
    switch (option) {
      case "Notas":
        return setModalAddNotas(true);

      case "Feed":
        return setModalAddFeed(true);

      case "Atividades":
        return setModalAddAtivs(true);

      case "Infos Gerais":
        return setModalAddInfos(true);

      default:
        break;
    }
  };

  function editNota(data) {
    const editedNota = {
      materia: data.materiaEditada,
      nota: data.notaEditada,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    api
      .put(`/notas/${notaId}`, editedNota, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setNotas(notas.map((nota) => nota.id === res.data.id ? res.data : nota ))
        setModalEditNotas(false)
        toast.success("Nota editada com sucesso")
      })
      .catch((error) => console.log(error));
  }

  function editFeedback(data) {
    const editedFeed = {
      feedback: data.feedbackEditado,
      name: data.nomeEditado,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    api
      .put(`/feedback/${FeedId}`, editedFeed, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setFeedbacks(feedbacks.map((feedback) => feedback.id === res.data.id ? res.data : feedback ))
        setModalEditFeed(false)
        toast.success("Feed editado com sucesso")})
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Header rota={"/dashboard/professor"} texto={"Voltar"} />
      <Container>
        <Content>
          <InfosContainer>
            <img className="imageAluno" src={imagemAluno} alt="" />
            <div className="infosAtividadeProfessor">
              <div className="infosAluno">
                <div>
                  <h3>Nome</h3>
                  <p>{alunoName}</p>
                </div>
                <div>
                  <h3>Turma</h3>
                  <p>{turma}</p>
                </div>
              </div>
              <div className="optionsProfessor">
                <form
                  className="selectDiv"
                  onSubmit={handleSubmit(onSubmitFunction)}
                >
                  <select
                    {...register("option")}
                    onChange={(e) => setOption(e.target.value)}
                  >
                    <option>Notas</option>
                    <option>Feed</option>
                    <option>Atividades</option>
                    <option>Infos Gerais</option>
                  </select>

                  <button type="submit">Pesquisar</button>
                  <button onClick={() => addToAluno(option)}>Adicionar</button>
                </form>
              </div>
            </div>
          </InfosContainer>

          <QuadroContainer>
            <ul>
              {notas &&
                notas.map((nota) => (
                  <li key={nota.id}>
                    <div>
                      <h1>{nota.materia}:</h1> <p>{nota.nota} pontos.</p>
                    </div>
                    <div>
                      <button
                        className="editButton"
                        onClick={() => {
                          setNotaId(nota.id);
                          setModalEditNotas(true);
                        }}
                      >
                        Editar
                      </button>{" "}
                      <button
                        className="buttonDelete"
                        onClick={() => deleteNota(nota.id)}
                      >
                        <FiTrash></FiTrash>
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
            <ul>
              {feedbacks &&
                feedbacks.map((feed) => (
                  <li key={feed.id}>
                    {" "}
                    <h1>{feed.feedback}</h1>
                    <div>
                      <button
                        className="editButton"
                        onClick={() => {
                          setFeedId(feed.id);
                          setModalEditFeed(true);
                        }}
                      >
                        Editar
                      </button>{" "}
                      <button
                        className="buttonDelete"
                        onClick={() => deleteFeed(feed.id)}
                      >
                        <FiTrash></FiTrash>
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
            <ul>
              {infos &&
                infos.map((info) => (
                  <li key={info.id}>
                    <h1>{info.message}</h1>
                    <button
                      className="buttonDelete"
                      onClick={() => deleteInfo(info.id)}
                    >
                      <FiTrash></FiTrash>
                    </button>
                  </li>
                ))}
            </ul>
            <ul>
              {ativs &&
                ativs.map((ativ) => (
                  <li key={ativ.id}>
                    <h2>{ativ.title}</h2>
                    <div>
                      <a href={ativ.url_atividade} target="_blank">
                        Acessar atividade
                      </a>
                      <button style={{marginLeft: "15px"}}
                        className="buttonDelete"
                        onClick={() => deleteAtiv(ativ.id)}
                      >
                        <FiTrash></FiTrash>
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </QuadroContainer>
        </Content>
      </Container>

      <Footer />

      <ModalContainer
        modalAddNotas={modalAddNotas}
        modalAddAtivs={modalAddAtivs}
        modalAddFeed={modalAddFeed}
        modalAddInfos={modalAddInfos}
        modalEditNotas={modalEditNotas}
        modalEditFeed={modalEditFeed}
      >
        <div className="modal-add-notas">
          <div className="modal-add-notas-content">
            <button
              className="closeModalButton"
              onClick={() => setModalAddNotas(false)}
            >
              <CgClose />
            </button>
            <div className="inputsModal">
              <h2>Notas</h2>
              <form onSubmit={handleSubmit(onSubmitAddNotaFunction)}>
                <input
                  type="text"
                  placeholder="materia"
                  {...register("materia")}
                ></input>
                <input
                  type="text"
                  placeholder="nota"
                  {...register("nota")}
                ></input>
                <button type="submit">Adicionar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="modal-add-feed">
          <div className="modal-add-feed-content">
            <button
              className="closeModalButton"
              onClick={() => setModalAddFeed(false)}
            >
              <CgClose />
            </button>
            <div className="inputsModal">
              <h2>Feed</h2>
              <form onSubmit={handleSubmit(onSubmitAddFeedFunction)}>
                <input
                  type="text"
                  placeholder="feedback"
                  {...register("feedback")}
                ></input>
                <input
                  type="text"
                  placeholder="nome"
                  {...register("name")}
                ></input>
                <button type="submit">Adicionar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="modal-add-ativs">
          <div className="modal-add-ativs-content">
            <button
              className="closeModalButton"
              onClick={() => setModalAddAtivs(false)}
            >
              <CgClose />
            </button>
            <div className="inputsModal">
              <h2>Atividades</h2>
              <form onSubmit={handleSubmit(onSubmitAddAtivFunction)}>
                <input
                  placeholder="Nome da atividade"
                  {...register("nome_atividade")}
                ></input>
                <input
                  placeholder="Link da atividade"
                  {...register("url_atividade")}
                ></input>
                <button type="submit">Adicionar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="modal-add-infos">
          <div className="modal-add-infos-content">
            <button
              className="closeModalButton"
              onClick={() => setModalAddInfos(false)}
            >
              <CgClose />
            </button>
            <div className="inputsModal">
              <h2>Infos</h2>
              <form onSubmit={handleSubmit(onSubmitAddInfoFunction)}>
                <input
                  type="text"
                  placeholder="infos"
                  {...register("message")}
                ></input>
                <button type="submit">Adicionar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="modal-edit-notas">
          <div className="modal-edit-notas-content">
            <button
              className="closeModalButton"
              onClick={() => setModalEditNotas(false)}
            >
              <CgClose />
            </button>
            <div className="inputsModal">
              <h2>Nota</h2>
              <form onSubmit={handleSubmit(editNota)}>
                <input
                  placeholder="Matéria"
                  {...register("materiaEditada")}
                ></input>
                <input placeholder="Nota" {...register("notaEditada")}></input>
                <button type="submit">Editar nota</button>
              </form>
            </div>
          </div>
        </div>

        <div className="modal-edit-feed">
          <div className="modal-edit-feed-content">
            <button
              className="closeModalButton"
              onClick={() => setModalEditFeed(false)}
            >
              <CgClose />
            </button>
            <div className="inputsModal">
              <h2>Nota</h2>
              <form onSubmit={handleSubmit(editFeedback)}>
                <input
                  placeholder="Feedback"
                  {...register("feedbackEditado")}
                ></input>
                <input placeholder="Nome" {...register("nomeEditado")}></input>
                <button type="submit">Editar nota</button>
              </form>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default AlunoPage;
