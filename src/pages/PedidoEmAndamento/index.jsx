import React, { useEffect } from "react";
import { useRequest } from "../../hook/useRequest";

const PedidoEmAndamento = () => {
  //pegar orders ativas
  const [data, getData] = useRequest("rappi4A/active-order");
  const orders = data.order;

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {orders ? (
        <>
          <h2>Pedido em andamento:</h2>
          <h3>{orders?.restaurantName}</h3>
          Subtotal: R$ {orders?.totalPrice}
        </>
      ) : (
        <p>Você não possui pedidos em andamento</p>
      )}
    </div>
  );
};

export default PedidoEmAndamento;
