import { BaseUrl } from "../constants/constants";
import axios from "axios";

const usePutChangeAddress = (url, body, go, goback) => {
  const token = localStorage.getItem("token");

  const putAddAddress = () => {
    axios
      .put(BaseUrl + url, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Dados enviados com sucesso");
        if (window.confirm("Ir para o feed?")) {
          go();
        } else {
          goback();
        }
      })
      .catch((err) => {
        alert("Algo deu errado por favor tente novamente");
        // console.log(err.data);
        // console.log(err.response);
        // console.log(err);
      });
  };
  return { putAddAddress };
};

export default usePutChangeAddress;
