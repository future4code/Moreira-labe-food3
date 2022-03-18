import axios from "axios";
import { BaseUrl, header } from "../constants/constants";
import { useNavigate } from "react-router-dom";
export const useEditProfile = (url, body, clearForm) => {
  const navigate = useNavigate();
  const putEditProfile = (cpfChar) => {
    if (cpfChar.length === 11) {
      axios
        .put(BaseUrl + url, body, header)
        .then((res) => {
          alert("Alterações realizadas com sucesso");
          clearForm();
          navigate("/profile");
        })
        .catch((err) => {
          alert("Algo deu errado por favor tente novamente");
          console.log(err);
        });
    } else {
      alert(
        "O CPF digitado não possui 11 números, por favor digite um CPF com 11 números."
      );
    }
  };
  return { putEditProfile };
};
