import axios from "axios";

export default axios.create({
  baseURL: "https://movit-api.herokuapp.com/api/",
  responseType: "json",
});
