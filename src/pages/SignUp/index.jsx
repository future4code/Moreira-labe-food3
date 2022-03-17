import React from "react";
import useForm from "../../hook/useForm";
import { useCadastro } from "../../hook/useCadastro";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const { postCadastro } = useCadastro("rappi4A/signup", form);
  const onSignUp = (e) => {
    e.preventDefault();
    e.persist();
    clearForm();
    postCadastro(form.cpf);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={onSignUp}>
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
        <input
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChangeForm}
          placeholder="Senha"
          required
        />
        <button type="submit">Criar</button>
      </form>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};
export default SignUp;
