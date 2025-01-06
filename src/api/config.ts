// External library
import axios from "axios";

export const API = axios.create({
  baseURL: "/data/",
  headers: {
    "Content-Type": "application/json",
  },
});
