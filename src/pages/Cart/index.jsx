import React, { useContext, useEffect, useState } from "react";
import GlobalState from "../../Global/GlobalState";
import { Container } from "./styled";
import { GlobalContext } from "../../Global/GlobalContext";
import useRemoveItem from "../../hook/useRemoveItem";

const Cart = () => {
  const { cart } = useContext(GlobalContext);
  const removeDoCarrinho = useRemoveItem();

  // Recenbendo o cart do local storage
  const retrievedCart = localStorage.getItem("cart");
  const cartItems = JSON.parse(retrievedCart);
  console.log(cart);
  const renderiza = () => {
    const listaCarrinho = cart?.map((pedido) => {
      return (
        <div key={pedido.name}>
          <p>{pedido.name}</p>
          <p>R${pedido.preco}</p>
          <p>
            Quantidade:
            {pedido.quantidade ? pedido.quantidade : (pedido.quantidade = 1)}
          </p>
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
    return listaCarrinho;
  };

  useEffect(() => {
    renderiza();
  }, [cartItems]);
  console.log("cart", cart);
  const total = () => {
    let totalValue = 0;

    for (let product of cart) {
      totalValue += product.preco * Number(product.quantidade);
    }

    return totalValue.toFixed(2);
  };
//oject a ser enviada na requesição de fazer pedido
  //   a={
  // 	"products": [{
  // 		"id": "CnKdjU6CyKakQDGHzNln",
  // 		"quantity": 10
  // 	}, {
  // 		"quantity": 1,
  // 		"id": "KJqMl2DxeShkSBevKVre"
  // 	}],
  // 	"paymentMethod": "creditcard"
  // }
  return (
    <div>
      <Container>{renderiza()}</Container>
      <div>{total()}</div>
      <div>
        <form>
          <input
            type="radio"
            id="paymentMethod"
            name="paymentMethod"
            value="Cartão"
          />
          <label htmlFor="Cartão">Cartão</label>
          <input
            type="radio"
            id="paymentMethod"
            name="paymentMethod"
            value="Dinheiro"
          />
          <label htmlFor="Dinheiro">Dinheiro</label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Cart;
