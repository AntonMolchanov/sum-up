import axios from 'axios';

const getDays = async () => {

}

const login = async (user) => {
  return await axios
    .post('/users/login', user)
}

export default {
  login,
  getDays,
  
}