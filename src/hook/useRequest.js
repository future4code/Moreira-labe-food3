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
  const getData = async () => {
    try {
      const resp = await axios.get(BaseUrl + path, header);
      setData(resp.data);
      // console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return [data, getData];
};
