import axios from "axios";

const register = async (user) =>
    axios.post("api/users", user).then((data) => {
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
        headers: {authorization: token},
        withCredentials: true,
    });

const deletePleasure = async (id, token) =>
    await axios.delete(`/api/pleasures/${id}`, {
        headers: {authorization: token},
        withCredentials: true,
    });

const updatePleasure = async (id, token, updatedPleasure) =>
    await axios.put(`/api/pleasures/${id}`, {
            title: updatedPleasure.title,
            description: updatedPleasure.description
        },
        {
            headers:
                {
                    authorization: token,
                },
        }
    );

const allAPI = {
    login,
    get,
    getDays,
    save,
    deleteSituation,
    register,
    deletePleasure,
    updatePleasure
};

export default allAPI;
