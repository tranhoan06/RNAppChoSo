import axios from "axios";
import { BASE_API, BASE_PRODUCT } from "../constants.js/app";

const Http = axios.create({
  baseURL: BASE_PRODUCT,
  // responseType: 'json',
  // withCredentials: true,
});

console.log("Http.get", Http.get);

export default Http;
