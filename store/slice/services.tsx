import axios from 'axios';
import getAxiosInstance from '../../services/axios';

const API_URL = 'api/v1/user/'
const API_AUTH = 'api/v1/auth/'

// register user
const signup = async (userDetails) => {
  const response = await getAxiosInstance().post(`${ API_AUTH }add`, userDetails);
//   if (response.data) {
//     localStorage.setItem('UserData', JSON.stringify(response.data));
//   }
  return response.data;
};
