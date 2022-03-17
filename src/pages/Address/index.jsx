import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hook/useForm";
import usePutChanges from "../../hook/usePutChanges";
const Address = () => {
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
  const { putAddAddress } = usePutChanges("rappi4A/address", form);
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
          required
        />
        <button type="submit">Salvar</button>
      </form>
      <Link to="/signup">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default Address;
