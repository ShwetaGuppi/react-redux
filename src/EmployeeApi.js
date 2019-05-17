import axios from "axios";

export const getData = () => {
  axios.get(`http://localhost:3000/user`);
};
