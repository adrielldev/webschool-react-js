import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-web-school.herokuapp.com",
});

export const apiPrivate = axios.create({
  baseURL: "https://api-web-school.herokuapp.com",
  headers: {
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem("@WebSchool:Token")
    )}`,
  },
});
