import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../constants/constants";

export const useRequest = (path) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      auth: token,
    },
  };
  const getData = () => {
    axios
      .get(BaseUrl + path, header)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [data, getData];
};
