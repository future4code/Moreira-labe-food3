import { header, BaseUrl } from "../constants/constants";
import axios from "axios";

const usePutChangeAddress = (url, body, go, goback) => {
  const putAddAddress = () => {
    axios
      .put(BaseUrl + url, body, header)

      .then((res) => {
        alert("Dados enviados com sucesso");
        if (window.confirm("Ir para o feed?")) {
          go();
        } else {
          goback();
        }
      })
      .catch((err) => {
        alert("Algo deu errado por favor tente novamente");
      });
  };
  return { putAddAddress };
};

export default usePutChangeAddress;
