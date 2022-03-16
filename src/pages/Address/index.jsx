import axios from "axios";
import React from "react";
import { BaseUrl, header } from "../../constants/constants";
import useForm from "../../hook/useForm";
const Address = () => {
  localStorage.getItem("token");
  const { form, onChangeForm, clearForm } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const onAddAddress = (e) => {
    e.preventDefault();
    clearForm();
  };
  const addAddress = () => {
    axios
      .put(BaseUrl + "rappi4A/address", header)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Meu endereço</h2>
      <form onSubmit={onAddAddress}>
        <input
          type="text"
          name={"street"}
          value={form.street}
          onChange={onChangeForm}
          placeholder="Logradouro"
          required
        />
        <input
          type="number"
          name={"number"}
          value={form.number}
          onChange={onChangeForm}
          placeholder="Número"
          required
        />
        <input
          type="text"
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChangeForm}
          placeholder="Bairro"
          required
        />
        <input
          type="text"
          name={"city"}
          value={form.city}
          onChange={onChangeForm}
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          name={"state"}
          value={form.state}
          onChange={onChangeForm}
          placeholder="Estado"
          required
        />
        <input
          type="text"
          name={"complement"}
          value={form.complement}
          onChange={onChangeForm}
          placeholder="Complemento"
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Address;
