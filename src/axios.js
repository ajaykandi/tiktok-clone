import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-aj.herokuapp.com",
});

export default instance;
