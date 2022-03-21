import { useNavigate } from "react-router-dom";
import React from "react";
import { useLogout } from "../../hook/useLogout";
import styled from 'styled-components'
import { FaHome, FaUserAlt, FaShoppingCart, FaRegListAlt, FaSignInAlt } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  margin: 10px 0px;
  //border-bottom: 1px solid black;
` 
const Fig = {
  fontSize:"25px",
  color:"#FF3B30",
  //marginBottom:"10px"
}

export const HeaderPage = () => {
  const logout= useLogout()
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <span
          role="img"
          aria-label="Navegar para o feed"
          onClick={() => navigate("/feed")}
        >
          <FaHome style={Fig}/>
        </span>
        <span
          role="img"
          aria-label="Navegar para o perfil"
          onClick={() => navigate("/profile")}
        >
          <FaUserAlt style={Fig}/>
        </span>
        <span
          role="img"
          aria-label="Navegar para o carrinho"
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart style={Fig}/>
        </span>
        <span
          role="img"
          aria-label="Navegar para o pedido"
          onClick={() => navigate("/pedido")}
        >
          <FaRegListAlt style={Fig}/>
        </span>
        <span
          role="img"
          aria-label="Fazer logout"
          onClick={logout}
        >
          <FaSignInAlt style={Fig}/>
        </span>
      </Container>
    </div>
  );
};
