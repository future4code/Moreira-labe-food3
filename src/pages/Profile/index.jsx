import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import { BaseUrl } from "../../constants/constants";
import { useRequest } from "../../hook/useRequest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HeaderPage } from "../../components/Header/HeaderPage";
import useProtectedPage from "../../hook/useProtectedPage ";
const Main = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 400px;
`;

const Profile = () => {
  useProtectedPage();
  const [pedidos, setPedidos] = useState([]);

  const { profile, setProfile, address, SetAddress } =
    useContext(GlobalContext);

  const [data, getData] = useRequest("rappi4A/profile");
  const [addressProfile, getAdress] = useRequest("rappi4A/profile/address");
  const navigate = useNavigate();
  useEffect(() => {
    SetAddress(addressProfile.address);
    setProfile(data.user);
    getData();
    getAdress();
    // eslint-disable-next-line
  }, [pedidos]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(BaseUrl + "rappi4A/orders/history", header)
      .then((res) => {
        setPedidos(res.data.orders);
      })
      .catch((error) => {
        alert(error.response);
      });
  }, [profile]);

  const listaDePedidos = pedidos?.map((pedido) => {
    return <p key={pedido.createdAt}>{pedido.restaurantName}</p>;
  });

  return (
    <div>
      <HeaderPage />
      <br />
      {profile && address ? (
        <>
          <button onClick={() => navigate("/editar")}>Editar Perfil</button>
          <Main>
            <h4>Perfil:</h4>
            <p>Usuário: {profile?.name}</p>
            <p>E-mail: {profile?.email}</p>
            <p>CPF: {profile?.cpf}</p>
          </Main>
          <button onClick={() => navigate("/address")}>Editar Endereço</button>
          <Main>
            <h4>Endereço:</h4>
            <p>Rua: {address?.street}</p>
            <p>
              N° {address?.number} - {address?.complement}
            </p>
            <p>Bairro: {address?.neighbourhood}</p>
            <p>Cidade: {address?.city}</p>
            <p>Estado: {address?.state}</p>
          </Main>
          <Main>
            <h4>Histórico de pedidos: </h4>
            {listaDePedidos.length > 0
              ? listaDePedidos
              : "Você ainda não fez nenhum pedido."}
          </Main>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Profile;
