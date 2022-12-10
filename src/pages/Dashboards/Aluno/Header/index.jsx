import { ThemeHeader, ThemeTitle } from "./style";

import { useHistory } from "react-router-dom";

import Logo2 from "../../../../assets/img2.png";

const Header = ({ rota, texto }) => {
  const history = useHistory();

  function callBack() {
    texto === "Sair" && localStorage.clear();
    history.push(`${rota}`);
  }

  return (
    <ThemeHeader w="100%" h="10vh" bc="var(--blue-1)" j="center" a="center">
      <ThemeTitle j="space-evenly" a="center" w="100%">
        <img src={Logo2} alt="Logo" />
        <button onClick={callBack}>{texto}</button>
      </ThemeTitle>
    </ThemeHeader>
  );
};

export default Header;
