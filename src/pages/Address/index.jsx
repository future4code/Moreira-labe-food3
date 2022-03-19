import React from "react";
import useForm from "../../hook/useForm";
import usePutChangeAddress from "../../hook/usePutChangeAddress";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/feed");
  };
  const goBack = () => {
    navigate(-1);
  };
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
    putAddAddress();
  };
  const { putAddAddress } = usePutChangeAddress(
    "rappi4A/address",
    form,
    goTo,
    goBack
  );
  return (
    <div>
      <h2>Meu endereço</h2>
      <form onSubmit={onAddAddress}>
        <input
          type="text"
          name={"street"}
          value={form.street}
          onChange={onChangeForm}
          placeholder="Logradouro ou Rua"
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
        />
        <button type="submit">Salvar</button>
      </form>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default Address;
