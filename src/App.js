import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import RoutesApp from "./routes";
import GlobalState from "./Global/GlobalState";
function App() {
  return (
    <GlobalState>
      <GlobalStyled />
      <RoutesApp />
    </GlobalState>
  );
}

export default App;
