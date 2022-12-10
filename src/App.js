import GlobalStyle from "./styles/global";

import { useContext } from "react";
import { ModalContext } from "./contexts/modal/ContextModal";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "react-image-gallery/styles/css/image-gallery.css";

import { Routes } from "./routes";

function App() {
  const { modal } = useContext(ModalContext);

  return (
    <>
      <GlobalStyle
        o={modal ? "hidden" : "auto"}
        mh={modal ? "100vh" : "inherit"}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      <Routes />
    </>
  );
}
export default App;
