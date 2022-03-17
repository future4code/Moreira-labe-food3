import { header, BaseUrl } from "../constants/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const usePutChanges = (url, body) => {
  const navigate = useNavigate();
  const putAddAddress = () => {
    axios
      .put(BaseUrl + url, body, header)

      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // console.log(res.data.token);
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err.data);
        console.log(err);
        alert("Algo deu errado por favor tente novamente");
      });
  };
  return { putAddAddress };
};
export default usePutChanges;
