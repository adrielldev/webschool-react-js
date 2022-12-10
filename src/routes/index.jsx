import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Notices from "../pages/Notices";
import { Register } from "../pages/Register";
import { RegisterComplement } from "../pages/RegisterComplement";

import DashboardProfessor from "../pages/Dashboards/Professor";
import Instituicao from "../pages/Dashboards/Instituicao";
import AlunoPage from "../pages/Dashboards/Professor/SubPages/AlunoPage";
import Aluno from "../pages/Dashboards/Aluno";

import Notas from "../pages/Dashboards/Aluno/SubPages/notas";
import Atividades from "../pages/Dashboards/Aluno/SubPages/Atividades";
import FeedBackAluno from "../pages/Dashboards/Aluno/SubPages/FeedBack";
import InfoGerais from "../pages/Dashboards/Aluno/SubPages/InformacoesGerais";

import NotasPai from "../pages/Dashboards/Responsavel/SubPages/Notas";
import InfosPai from "../pages/Dashboards/Responsavel/SubPages/InformacoesGerais";
import FeedbacksPai from "../pages/Dashboards/Responsavel/SubPages/Feedbacks";
import PagPrincipalPai from "../pages/Dashboards/Responsavel";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/registerComplement">
        <RegisterComplement />
      </Route>

      <Route path="/notices">
        <Notices />
      </Route>

      <Route exact path="/dashboard/responsavel">
        <PagPrincipalPai />
      </Route>

      <Route path="/dashboard/responsavel/notas">
        <NotasPai />
      </Route>

      <Route path="/dashboard/responsavel/infos">
        <InfosPai />
      </Route>

      <Route path="/dashboard/responsavel/feedbacks">
        <FeedbacksPai />
      </Route>

      <Route exact path="/dashboard/instituicao">
        <Instituicao />
      </Route>

      <Route exact path="/dashboard/aluno">
        <Aluno />
      </Route>

      <Route exact path="/dashboard/aluno/atividades">
        <Atividades />
      </Route>

      <Route exact path="/dashboard/aluno/feedBack">
        <FeedBackAluno />
      </Route>

      <Route exact path="/dashboard/aluno/infoGerais">
        <InfoGerais />
      </Route>

      <Route exact path="/dashboard/aluno/notas">
        <Notas />
      </Route>

      <Route exact path="/dashboard/professor">
        <DashboardProfessor />
      </Route>

      <Route exact path="/dashboard/professor/aluno">
        <AlunoPage />
      </Route>
    </Switch>
  );
};
