import axios from "axios";

const get = async (breakpoint, token) => {
  return await axios.get(breakpoint, {
    headers: {
      authorization: token,
    },
  });
};

const getDays = async (token) => {
  return await axios.get("/days", {
    headers: {
      authorization: token,
    },
  });
};

const save = async (breakpoint, token, newSituation) => {
  return await axios.post(breakpoint, {
    headers: {
      authorization: token,
      body: { ...newSituation },
    },
  });
};

const login = async (user) => {
  return await axios.post("/users/login", user);
};

const allAPI = {
  login,
  get,
  getDays,
};

export default allAPI;
