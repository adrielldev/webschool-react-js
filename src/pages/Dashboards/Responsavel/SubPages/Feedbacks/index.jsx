import { useEffect, useContext, useState } from "react";

import { Container, DivFeedback } from "../../styles";

import Header from "../../Header";
import Footer from "../../../../../components/Footer";

import { api } from "../../../../../services/api";

import { UserContext } from "../../../../../contexts/User/UserContext";

import { toast } from "react-toastify";

const FeedbacksPai = () => {
  const { userContext } = useContext(UserContext);

  const [id, setId] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [valueFeedback, setValueFeedback] = useState([]);

  useEffect(() => {
    api
      .get(`/users?registration=${userContext.registration_son}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@WebSchool:Token")
          )}`,
        },
      })
      .then((res) => setId(res.data[0]?.id || []))
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    if (!!id) {
      api
        .get(`/feedback?userId=${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("@WebSchool:Token")
            )}`,
          },
        })
        .then((res) => setFeedbacks(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  function postFeedback(value) {
    const newFeedback = { name: userContext.name, feedback: value, userId: id };
    if (value !== "") {
      api
        .post("/feedback", newFeedback, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("@WebSchool:Token")
            )}`,
          },
        })
        .then((res) => {
          setValueFeedback("");
          setFeedbacks([...feedbacks, res.data]);
        });
    } else {
      toast.error("Digite um texto");
    }
  }

  return (
    <>
      <Header rota="/dashboard/responsavel" texto="Voltar" />
      <Container mw="80vw">
        <h2 style={{ marginTop: "30px" }}>Olá, {userContext.name}</h2>
        <div>
          <h3>Feedbacks</h3>
          <ul>
            {feedbacks.length === 0 ? (
              <li>
                <p>Nenhum feedback cadastrado</p>
              </li>
            ) : (
              feedbacks?.map((feedback) => (
                <li key={feedback.id}>
                  <span>- {feedback.name}</span>
                  <p>{feedback.feedback}</p>
                </li>
              ))
            )}
          </ul>
          <DivFeedback>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                postFeedback(valueFeedback);
              }}
            >
              <div>
                <p>Enviar resposta</p>
                <button type="submit" />
              </div>
              <textarea
                placeholder="Responda aos feedbacks"
                onChange={(event) => setValueFeedback(event.target.value)}
                value={valueFeedback}
              />
            </form>
          </DivFeedback>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FeedbacksPai;
