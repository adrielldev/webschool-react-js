import { ThemeDiv, ThemeFooter } from "./style";
const Footer = () => {
  return (
    <ThemeFooter
      w="100%"
      h="10vh"
      bc="var(--blue-1)"
      j="space-around"
      a="center"
    >
      <ThemeDiv j="center">
        <p className="contact">Email para contato: lucasdeleonpaz@gmail.com</p>
        <p>© Copyright WebSchool 2022</p>
      </ThemeDiv>
    </ThemeFooter>
  );
};

export default Footer;
