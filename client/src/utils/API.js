import axios from "axios";

const get = async (breakpoint, token) => {
  return await axios.get("api" + breakpoint, {
    headers: {
      authorization: token,
    },
  });
};

const getDays = async (token) => {
  return await axios.get("api/days", {
    headers: {
      authorization: token,
    },
  });
};

const save = async (breakpoint, token, newItem) => {
  return await axios.post("api" + breakpoint, newItem, {
    headers: {
      authorization: token,
    },
  });
};

const login = async (user) => {
  return await axios.post("api/users/login", user);
};

const deleteSituation = async (id, token) => {
  return await axios.delete(`api/situations/${id}`, {
    headers: { authorization: token },
    withCredentials: true,
  });
};

const allAPI = {
  login,
  get,
  getDays,
  save,
  deleteSituation,
};

export default allAPI;
