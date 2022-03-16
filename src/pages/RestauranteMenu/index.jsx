import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";
import styled from "styled-components";

const Main = styled.div `
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 400px;
`
const Img = styled.img`
  width: 100px;
  height: 100px;
`

const Menu = () => {

  const navigate = useNavigate()
  const restaurantId = useParams()

  const {restaurantsDetails, setRestaurantsDetails} = useContext(GlobalContext)

  const GetRestaurantDetail = () => {

    const token = localStorage.getItem('token')

    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants/${restaurantId.id}`, { 
      headers: {
      auth: token
    }
  })
  .then((res) => {
    console.log(res.data.restaurant.products)
    setRestaurantsDetails(res.data.restaurant.products)
  })
  .catch((err) => {
    console.log(err.response)
  })
  }

  useEffect(() => {
    GetRestaurantDetail()
  }, [])
  return <div> <button onClick={() => navigate(-1)}>Voltar</button>
    {restaurantsDetails.map(({id, category, description, name, price, photoUrl})=> {
    return <Main key={id}>
      <h2>{name}</h2> <Img src={photoUrl}/> <br/>
      <span>{category}</span> <button>Adicionar</button>
      <select>
        <option selected disabled>Quantidade</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <p>{description}</p>
      <p>R$ {price}</p>
      </Main>
  })}</div>
};

export default Menu;
