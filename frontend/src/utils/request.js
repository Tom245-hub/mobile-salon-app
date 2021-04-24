import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost/mobile-salon-app/backend/constrollers",
});

export default request;
