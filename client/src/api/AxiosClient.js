import axios from 'axios';

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => JSON.stringify(params),
});


export default AxiosClient;