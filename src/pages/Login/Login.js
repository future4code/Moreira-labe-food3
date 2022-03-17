import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import { useContext } from "react";
const ContainerLogin = styled.div`
  margin: 144px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
  div {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
  h3 {
    margin: 0;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };
  const { hasAddress } = useContext(GlobalContext);

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
        if (hasAddress === true) {
          navigate("/feed");
          console.log(response.data);
        } else {
          navigate("/address");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <ContainerLogin>
      <h3>Login</h3>
      <form onSubmit={onSubmitLogin}>
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        ></input>
        <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={onChangeSenha}
        ></input>
        <button>Entrar</button>
      </form>
      <div>
        <button onClick={goBack}>Voltar</button>
      </div>
    </ContainerLogin>
  );
};

export default Login;
