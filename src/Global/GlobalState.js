import { GlobalContext } from "./GlobalContext";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const GlobalState = (props) => {
  const data = "Teste Home";
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsDetails, setRestaurantsDetails] = useState([])
  const [cart, setCart] = useState([])
  const [produtos, setProdutos] = useState([])
  
  
  
  return (
    <GlobalContext.Provider value={{data, restaurants, setRestaurants, restaurantsDetails, setRestaurantsDetails, cart, setCart, produtos, setProdutos}}>
      {props.children} 
    </GlobalContext.Provider>
  );
};
export default GlobalState;
