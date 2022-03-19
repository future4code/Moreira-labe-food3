import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg"

const Main = styled.div `
  background-color: #FF3B30;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ContainerButon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5vh ;
  height: 11vh;
  width: 25vw;
`

const Button = styled.button`
  border: 0px;
  height: 4vh;
  border-radius: 10px;
  width: 90%;
  font-size: 0.8rem;
  font-weight: bold;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  :active{
    transform: scale(1.1);
  }
`

const Home = (props) => {
  
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  const goToSignUp = () => {
    navigate('/signup')
  }


  return <Main>
          <img src={logo} />
          <ContainerButon>
          <Button onClick={() => goToLogin()}>Entrar</Button>
          <Button onClick={() => goToSignUp()}>Cadastrar</Button>
          </ContainerButon>
        </Main>;
};

export default Home;
