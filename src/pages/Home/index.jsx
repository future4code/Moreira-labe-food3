import React from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { useContext } from "react";

const Home = (props) => {
  const data = useContext(GlobalContext);
  console.log(data);
  return <div>{data}</div>;
};

export default Home;
