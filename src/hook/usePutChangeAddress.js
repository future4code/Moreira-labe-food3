import { header, BaseUrl } from "../constants/constants";
import axios from "axios";

const usePutChangeAddress = (url, body, go) => {
  const putAddAddress = () => {
    axios
      .put(BaseUrl + url, body, header)

      .then((res) => {
        localStorage.setItem("token", res.data.token);
        go();
      })
      .catch((err) => {
        console.log(err.data);
        console.log(err);
        alert("Algo deu errado por favor tente novamente");
      });
  };
  return { putAddAddress };
};
export default usePutChangeAddress;
