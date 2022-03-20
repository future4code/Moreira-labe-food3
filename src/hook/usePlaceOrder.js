import { useContext, useState } from "react";
import { BaseUrl } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../Global/GlobalContext";
export const usePlaceOrder = (cartProd, formInfo, id) => {
  const { setCart } = useContext(GlobalContext);
  const navigate = useNavigate();
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
        localStorage.removeItem("cart");
        setCart([]);
        alert(`Pedido realizado com sucesso!`);
        navigate("/pedido");
        console.log(res.data);
      })
      .catch((err) => {
        if (hasOrder) {
          alert("Você ja possui pedido em andamento.");
          navigate("/pedido");
          localStorage.removeItem("cart");
          setCart([]);
        } else {
          setCart([]);
          alert(
            "Ocorreu um erro, por favor verifique se você possui pedidos em andamento ou tente novamente mais tarde."
          );
        }
      });
  };
  return placeOrder;
};
