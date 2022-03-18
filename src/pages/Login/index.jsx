import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

const ContainerLogin = styled.div`
  margin-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 55vw;
  outline: 0px;
  border-radius: 10px;
  border: 0px;
  height: 4vh;
  margin: 7px;
  background-color: #FF3B30;
  color: white;
  font-weight: bold;
  padding: 0px 0px 0px 10px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

  &::placeholder {
    color: white;
    font-weight: bold;
   }
`

const Button = styled.button`
  background-color: #FF3B30;
  width: 50%;
  margin: 7px;
  border: 0px;
  border-radius: 10px;
  height: 4vh;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: white;
  font-weight: bold;
`

const ContainerBut = styled.div`
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const ContainerCadastro = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
`

const H3 = styled.h3`
  font-size: 1.5rem;
`



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
        console.log(error.response);
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
      <Button onClick={goToSignUp}>Cadastre-se</Button>
      </ContainerCadastro>
    </ContainerLogin>
    </>
  );
};

export default Login;
