import React from "react";
import useForm from "../../hook/useForm";
import { useCadastro } from "../../hook/useCadastro";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Container, H3, ContainerBut, ContainerLogin, Form, Input, Button, ButtonLogin } from "./styled";


const SignUp = () => {
  const navigate = useNavigate();
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const { postCadastro } = useCadastro("rappi4A/signup", form, clearForm);
  const onSignUp = (e) => {
    e.preventDefault();

    postCadastro(form.cpf);
  };

  return (
    <>
    <Header />
    <Container>
      <H3>Cadastro</H3>
      <Form onSubmit={onSignUp}>
        <Input
          type="text"
          name={"name"}
          value={form.name}
          onChange={onChangeForm}
          placeholder="Nome"
          required
        />
        <Input
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChangeForm}
          placeholder="Email"
          required
        />
        <Input
          type="number"
          name={"cpf"}
          value={form.cpf}
          onChange={onChangeForm}
          placeholder="CPF"
          title="O CPF deve conter apenas 11 números, sem traços ou pontos."
          required
        />
        <Input
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChangeForm}
          placeholder="Senha"
          required
        />
        <ContainerBut>
        <Button type="submit">Criar</Button>
        </ContainerBut>
      </Form>
      <ContainerLogin>
      <H3>Já possui uma conta?</H3>
      <ButtonLogin onClick={() => navigate("/login")}>Login</ButtonLogin>
      </ContainerLogin>
    </Container>
    </>
  );
};

export default SignUp;
