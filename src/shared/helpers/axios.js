import axios from "axios";
import config from "../../config";

export default axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  proxy: {
    host: "localhost",
    port: 3000,
  }
});
