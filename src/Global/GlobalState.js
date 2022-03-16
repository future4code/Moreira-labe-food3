import { GlobalContext } from "./GlobalContext";
import React, { useState } from "react";
const GlobalState = (props) => {
  const data = "Teste Home";
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsDetails, setRestaurantsDetails] = useState([])
  const [cart, setCart] = useState([])

  
  return (
    <GlobalContext.Provider value={{data, restaurants, setRestaurants, restaurantsDetails, setRestaurantsDetails, cart, setCart}}>
      {props.children} 
    </GlobalContext.Provider>
  );
};
export default GlobalState;
