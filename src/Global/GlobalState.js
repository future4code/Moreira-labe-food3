import { GlobalContext } from "./GlobalContext";
import React, { useState } from "react";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsDetails, setRestaurantsDetails] = useState([]);
  const [cart, setCart] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [profile, setProfile] = useState([]);
  const [address, SetAddress] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        profile,
        setProfile,
        address,
        SetAddress,
        restaurants,
        setRestaurants,
        restaurantsDetails,
        setRestaurantsDetails,
        cart,
        setCart,
        produtos,
        setProdutos,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
