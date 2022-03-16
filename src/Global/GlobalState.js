import { GlobalContext } from "./GlobalContext";
import React, { useState } from "react";
const GlobalState = (props) => {
  const data = "Teste Home";
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsDetails, setRestaurantsDetails] = useState([])
  return (
    <GlobalContext.Provider value={{data, restaurants, setRestaurants, restaurantsDetails, setRestaurantsDetails}}>
      {props.children} 
    </GlobalContext.Provider>
  );
};
export default GlobalState;
