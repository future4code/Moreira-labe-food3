import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import { header } from "../../constants/constants";
import { useRequest } from "../../hook/useRequest";
import { useNavigate } from "react-router-dom";
const Main = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 400px;
`;

const Profile = () => {
  const { profile, setProfile, address, SetAddress } =
    useContext(GlobalContext);
  const { data, getData } = useRequest("rappi4A/profile");
  const navigate = useNavigate();
  // const { data1 } = useRequest("rappi4A/profile/address");
  // SetAddress(data1);
  // const GetProfile = () => {
  //   // const token = localStorage.getItem("token");
  //   axios
  //     .get(
  //       "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile",
  //       header
  //     )
  //     .then((res) => {
  //       // console.log("perfil", res.data.user);
  //       setProfile(res.data.user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const GetFullAddress = () => {
    // const token = localStorage.getItem("token");

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile/address",
        header
      )
      .then((res) => {
        // console.log("endereço", res.data.address);
        SetAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  setProfile(data.user);
  useEffect(() => {
    // GetProfile();
    // setProfile(data.user);
    getData();
    GetFullAddress();
  }, []);
  console.log(profile);
  return (
    <div>
      <Main>Usuário: {profile?.name}</Main>
      <Main>E-mail: {profile?.email}</Main>
      <Main>
        Endereço: {address.street} - Nº: {address.number}
      </Main>
      <button onClick={() => navigate(-1)}>voltar</button>
      <button onClick={() => navigate("/address")}>Editar Endereço</button>
      <button onClick={() => navigate("/editar")}>Editar Perfil</button>
    </div>
  );
};

export default Profile;
