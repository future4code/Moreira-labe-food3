import React, { useEffect } from "react";
import { HeaderPage } from "../../components/Header/HeaderPage";
import useProtectedPage from "../../hook/useProtectedPage ";
import { useRequest } from "../../hook/useRequest";

const PedidoEmAndamento = () => {
  useProtectedPage();
  //pegar orders ativas
  const [data, getData] = useRequest("rappi4A/active-order");
  const orders = data.order;

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  //console.log(orders)
  return (
    <div>
      <HeaderPage />
      {orders ? (
        <>
          <h2>Pedido em andamento:</h2>
          <h3>{orders?.restaurantName}</h3>
          Subtotal: R$ {orders?.totalPrice.toFixed(2)}
        </>
      ) : (
        <p>Você não possui pedidos em andamento</p>
      )}
    </div>
  );
};

export default PedidoEmAndamento;
