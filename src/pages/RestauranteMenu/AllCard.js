import React, { useContext } from "react";
import { useForm } from "../../hook/useForm";
import { quantidade } from "../../constants/quantidade";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Main = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 400px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export default function AllCard(props) {
  const { id } = useParams();
  const { form, onChangeForm, clearForm } = useForm({ quantity: "" });
  const { cart, setCart, setRestaurantId } = useContext(GlobalContext);
  const [inCart, setInCart] = useState(false);
  const onChange = (e) => {
    e.preventDefault();
    clearForm();
  };

  const produto = {
    name: props.name,
    id: props.id,
    quantity: form.quantity,
    foto: props.photoUrl,
    preco: props.price,
  };

  const adicionarAoCarrinho = (produto) => {
    const novoCarrinho = [...cart];
    setInCart(true);
    setRestaurantId(id);
    const listaCarrinho = novoCarrinho.find((item) => produto.id === item.id);

    if (listaCarrinho) {
      alert("O produto já está no carrinho");
    } else {
      novoCarrinho.push(produto);
    }
    setCart(novoCarrinho);
  };

  //Salvando o carrinho no local storage
  const storedCart = cart;
  localStorage.setItem("cart", JSON.stringify(storedCart));

  return (
    <>
      <div>
        <h2>{props.name}</h2> <Img src={props.photoUrl} /> <br />
        <Main>
          {inCart ? (
            <button>Deletar</button>
          ) : (
            <form onSubmit={onChange}>
              <select
                value={form.quantity}
                name={"quantity"}
                onChange={onChangeForm}
                required
              >
                <option value={""} disabled>
                  Quantidade
                </option>
                {quantidade.map((quant, index) => {
                  return <option key={index}>{quant}</option>;
                })}
              </select>
              <span>{props.category}</span>{" "}
              <button
                onClick={() => adicionarAoCarrinho(produto)}
                type="submit"
              >
                Adicionar
              </button>
            </form>
          )}
        </Main>
        <p>{props.description}</p>
        <p>R$ {props.price}</p>
        <p>Quantidade: {form.quantity ? form.quantity : 0}</p>
      </div>
    </>
  );
}
