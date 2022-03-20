import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Button, H3, ContainerBut, ButtonCadastro, ContainerCadastro, ContainerLogin, Form, Input } from "./styled";




const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const goToSignUp = () => {
    navigate('/signup')
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: senha,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/login",
        body
      )

      .then((response) => {
        localStorage.setItem("token", response.data.token);
        const hasAddress = response.data.user.hasAddress;

        if (hasAddress === true) {
          navigate("/feed");
          console.log(response.data);
        } else {
          navigate("/address");
          console.log(response.data);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
    <Header />
    <ContainerLogin>
      <H3>Login</H3>
      <Form onSubmit={onSubmitLogin}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        >
        </Input>
        <Input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={onChangeSenha}
        >
        </Input>
        <ContainerBut>
        <Button>Entrar</Button>
        <Button onClick={goBack}> Voltar</Button>
        </ContainerBut>
      </Form>
      <ContainerCadastro>
        <H3>Não tem conta?</H3>
      <ButtonCadastro onClick={goToSignUp}>Cadastre-se</ButtonCadastro>
      </ContainerCadastro>
    </ContainerLogin>
    </>
  );
};

export default Login;
