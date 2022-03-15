import { GlobalContext } from "./GlobalContext";
import React from "react";
const GlobalState = (props) => {
  const data = "Teste Home";

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
