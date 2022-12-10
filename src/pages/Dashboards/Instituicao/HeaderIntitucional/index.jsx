import { ThemeHeader, ThemeTitle } from "./style";

import { useHistory } from "react-router-dom";

import Logo2 from "../../../../assets/img2.png";

const HeaderInstitucional = () => {
  const history = useHistory();
  function callBack() {
    history.push("/");
    localStorage.clear();
  }

  return (
    <ThemeHeader w="100%" h="100px" bc="var(--blue-1)" j="center" a="center">
      <ThemeTitle j="space-between" a="center" w="80%">
        <img src={Logo2} alt="Logo" />
        <button onClick={callBack}>Sair</button>
      </ThemeTitle>
    </ThemeHeader>
  );
};

export default HeaderInstitucional;
