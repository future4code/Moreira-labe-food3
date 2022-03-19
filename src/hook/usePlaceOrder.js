import { useState } from "react";
import { BaseUrl } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const usePlaceOrder=(cartProd,formInfo,id,)=>{
  const navigate=useNavigate()
  const [hasOrder, setHasOrder] = useState(localStorage.getItem("order"));
  const placeOrder = () => {
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      auth: token,
    },
  };
  const body = {
    products: cartProd,
    paymentMethod: formInfo,
  };

  axios
    .post(`${BaseUrl}rappi4A/restaurants/${id}/order`, body, header)
    .then((res) => {
      localStorage.setItem("order", true);
      setHasOrder(localStorage.getItem("order"));
      navigate("/pedido");
      console.log(res.data);
    })
    .catch((err) => {
      if (hasOrder) {
        alert("Você ja possui uma ordem em andamento.");
        navigate("/pedido");
        localStorage.removeItem("cart");
      } else {
        alert("Ocorreu um erro, por favor tente novamente mais tarde.");
      }
    });
};
return placeOrder
}