import React from "react";
import { useNavigate } from "react-router-dom";
import { useEditProfile } from "../../hook/useEditProfile";
import useForm from "../../hook/useForm";
const EditarPerfil = () => {
  const navigate = useNavigate();
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
  });
  const onEditProfile = (e) => {
    e.preventDefault();
    putEditProfile(form.cpf);
  };
  const { putEditProfile } = useEditProfile("rappi4A/profile", form, clearForm);
  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={onEditProfile}>
        <input
          type="text"
          name={"name"}
          value={form.name}
          onChange={onChangeForm}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChangeForm}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name={"cpf"}
          value={form.cpf}
          onChange={onChangeForm}
          placeholder="CPF (somente números)"
          title="O CPF deve conter apenas 11 números, sem traços ou pontos."
          required
        />
        <button type="submit">Salvar</button>
      </form>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default EditarPerfil;
