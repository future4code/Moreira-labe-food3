import { useState } from "react";
import axios from "axios";
import { BaseUrl, header } from "../constants/constants";

export const useRequest = (path) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get(BaseUrl + path, header);
      setData(resp.data);
      // console.log(resp.data)
    } catch (err) {
      console.log(err);
    }
  };

  return { data, getData };
};
