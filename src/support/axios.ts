// create axios client

import axios from "axios";

const client = axios.create({
  baseURL: "/api",
  headers: {},
  timeout: 60000,
});


export default client;
