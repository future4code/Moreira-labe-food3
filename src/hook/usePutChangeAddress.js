import { header, BaseUrl, token } from "../constants/constants";
import axios from "axios";

const usePutChangeAddress = (url, body, go) => {
  const putAddAddress = () => {
    axios
      .put(BaseUrl + url, body, header)

      .then((res) => {
        localStorage.clear();
        localStorage.setItem("token", res.data.token);
        console.log("token request", res.data.token);
        
        alert("Alterações realizadas com sucesso");
        go();
      })
      .catch((err) => {
        // console.log(err.data);
        // console.log(err);
        alert("Algo deu errado por favor tente novamente");
      });
  };
  return { putAddAddress };
};
 console.log("token addres", token);
export default usePutChangeAddress;
