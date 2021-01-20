import axios from 'axios';

const getDays = async (token) => {
  return await axios
    .get('/days', {
      headers: {
        'authorization': token
      }
    })
}

const login = async (user) => {
  return await axios
    .post('/users/login', user)
}

export default {
  login,
  getDays,
  
}