import { myAxios } from "./Helper";

export const register1 = (user) => {
  return myAxios
    .post("/api/v1/register", user)
    .then((response) => response.data);
};
export const Login = (user) => {
  return myAxios.post("/api/v1/login", user).then((response) => response.data);
};
export const ReportAccidents = (data) => {
  return myAxios
    .post("/api/v1/informaccident", data)
    .then((response) => response.data);
};
