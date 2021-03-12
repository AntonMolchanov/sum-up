import axios from "axios";

const register = async (user) =>
  axios.post("api/users", user).then((data) => {
    console.log(data);
    return data.data;
  });

const get = async (breakpoint, token) =>
  await axios.get("api" + breakpoint, {
    headers: {
      authorization: token,
    },
  });

const getDays = async (token) =>
  await axios.get("api/days", {
    headers: {
      authorization: token,
    },
  });

const save = async (breakpoint, token, newItem) =>
  await axios.post("api" + breakpoint, newItem, {
    headers: {
      authorization: token,
    },
  });

const login = async (user) => await axios.post("api/users/login", user);

const deleteSituation = async (id, token) =>
  await axios.delete(`api/situations/${id}`, {
    headers: { authorization: token },
    withCredentials: true,
  });

const allAPI = {
  login,
  get,
  getDays,
  save,
  deleteSituation,
  register,
};

export default allAPI;
