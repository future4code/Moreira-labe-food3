import React, { useContext } from "react";
import GlobalState from "../../Global/GlobalState";
import { Container } from "./styled";
import { GlobalContext } from "../../Global/GlobalContext";

const Address = () => {
  const { cart } = useContext(GlobalContext);
  // Recenbendo o cart do local storage
  const retrievedCart = localStorage.getItem("cart");
  const cartItems = JSON.parse(retrievedCart);

  const listaCarrinho = cartItems?.map((pedido) => {
    return (
      <div>
        <p>{pedido.name}</p>
        <p>R${pedido.preco}</p>
        <p>Quantidade:{pedido.quantidade}</p>
        <hr
          style={{
            background: "#274837",
            height: 5,
          }}
        />
      </div>
    );
  });
  console.log(cart);
  return (
    <div>
      <Container>{listaCarrinho}</Container>
    </div>
  );
};

export default Address;
