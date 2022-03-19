import React, { useContext, useEffect } from "react";
import { Container } from "./styled";
import { GlobalContext } from "../../Global/GlobalContext";
import useRemoveItem from "../../hook/useRemoveItem";
import useForm from "../../hook/useForm";
import { usePlaceOrder } from "../../hook/usePlaceOrder";

const Cart = () => {
  
  const { cart, setCart, restaurantId } = useContext(GlobalContext);

  const removeDoCarrinho = useRemoveItem();

  const { form, onChangeForm, clearForm } = useForm({ paymentMethod: "" }); // Recenbendo o cart do local storage

  const retrievedCart = localStorage.getItem("cart");

  const cartItems = JSON.parse(retrievedCart);

  const onChoosePaymentMethod = (e) => {
    e.preventDefault();
    e.persist();
    clearForm();
  };

  const total = () => {
    let totalValue = 0;
    for (let product of cart) {
      totalValue += product.preco * Number(product.quantity);
    }
    return totalValue.toFixed(2);
  };

  const renderiza = () => {
    const listaCarrinho = cart?.map((pedido) => {
      return (
        <div key={pedido.name}>
          <p>{pedido.name}</p>
          <p>R${pedido.preco}</p>
          <p>
            Quantidade:
            {pedido.quantity ? pedido.quantity : (pedido.quantity = 1)}
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
  //map para montar o body do place order
  const cartProdutos = cart?.map(({ id, quantity }) => ({ id, quantity }));
  //fazer pedido
  const placeOrder = usePlaceOrder(cartProdutos, form.paymentMethod, restaurantId);
   //limpar o carrinho
  const limparCarrinho = () => {
    setCart([]);
    localStorage.removeItem("cart");
    alert(`O carrinho está vazio!`);
  };

  useEffect(() => {
    renderiza();
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <div>
      <button onClick={limparCarrinho}>Esvaziar carrinho</button>
      <Container>{cart.length ? renderiza() : <p>Carrinho Vazio</p>}</Container>
      <div>Total R$: {total()}</div>
      <div>
        <form onSubmit={onChoosePaymentMethod}>
          <label>Formas de pagamento:</label>

          <select
            name={"paymentMethod"}
            value={form.paymentMethod}
            onChange={onChangeForm}
            required
          >
            <option value={""} disabled>
              Formas de pagamento:
            </option>
            <option value="creditcard">Cartão</option>
            <option value="money">Dinheiro</option>
          </select>
          <button type="submit" onClick={placeOrder}>
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
