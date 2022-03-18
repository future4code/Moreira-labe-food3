import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import { header } from "../../constants/constants";
import { useRequest } from "../../hook/useRequest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Main = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 400px;
`;

const Profile = () => {
  const [pedidos, setPedidos] = useState([]);
  
  const { profile, setProfile, address, SetAddress } = useContext(GlobalContext);
 
  const { data, getData } = useRequest("rappi4A/profile");
  
  const navigate = useNavigate();

  const GetFullAddress = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile/address",
        header
      )
      .then((res) => {
        SetAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setProfile(data.user);
    getData();
    GetFullAddress();
  }, [pedidos]);


  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/orders/history",
        header
      )
      .then((response) => {
        setPedidos(response.data.orders);
      })
      .catch((error) => {
        alert(error.response);
      });
  }, []);

  const listaDePedidos = pedidos?.map((pedido) => {
    return <p key={pedido.createdAt}>{pedido.restaurantName}</p>;
  });

  return (
    <div>
      <button onClick={() => navigate("/feed")}>voltar</button>
      <button onClick={() => navigate("/address")}>Editar Endereço</button>
      <button onClick={() => navigate("/editar")}>Editar Perfil</button>
      <Main>
        <p>Usuário: {profile?.name}</p>
        <p>E-mail: {profile?.email}</p>
        <p>CPF: {profile?.cpf}</p>
      </Main>
      <Main>
        <p>Rua: {address.street}</p>
        <p>N° {address.number} - {address.complement}</p>
        <p>Bairro: {address.neighbourhood}</p>
        <p>Cidade: {address.city}</p>
        <p>Estado: {address.state}</p>
      </Main>
      <Main>
        Histórico de pedidos:
        <br />
        {listaDePedidos.length > 0
          ? listaDePedidos
          : "Você ainda não fez nenhum pedido."}
      </Main>
    </div>
  );
};

export default Profile;


