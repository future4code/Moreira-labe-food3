import React, { useContext, useEffect, useState } from "react";
import GlobalState from "../../Global/GlobalState";
import { Container } from "./styled";
import { GlobalContext } from "../../Global/GlobalContext";
import useRemoveItem from "../../hook/useRemoveItem";

const Address = () => {
  const { cart } = useContext(GlobalContext);
  const removeDoCarrinho = useRemoveItem()
  
  // Recenbendo o cart do local storage
  const retrievedCart = localStorage.getItem("cart");
  const cartItems = JSON.parse(retrievedCart);
  console.log(cart)
    const renderiza = () => {
      
      const listaCarrinho = cart?.map((pedido) => {
        return (
          <div>
            <p>{pedido.name}</p>
            <p>R${pedido.preco}</p>
            <p>Quantidade:{pedido.quantidade}</p>
            <button onClick={() => removeDoCarrinho(pedido)}>Remover</button>
            <hr
              style={{
                background: "#274837",
                height: 5,
              }}
            />
          </div>
        );
      });
      return listaCarrinho
    }
    useEffect(() => {
      renderiza()
    }, [cartItems])
  

  return (
    <div>
       <Container>{renderiza()}</Container> 
    </div>
  );
};

export default Address;
