import { header, BaseUrl, token } from "../constants/constants";
import axios from "axios";

const usePutChangeAddress = (url, body, go) => {
  const putAddAddress = () => {
    axios
      .put(BaseUrl + url, body, header)

      .then((res) => {
        alert("Dados enviados com sucesso");
        go();
      })
      .catch((err) => {
        alert("Algo deu errado por favor tente novamente");
      });
  };
  return { putAddAddress };
};

export default usePutChangeAddress;
