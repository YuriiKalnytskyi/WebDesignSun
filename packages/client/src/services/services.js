import axios from 'axios';

const options = {
  baseURL: process.env.REACT_APP_API_URL
};
const axiosInstance = axios.create(options);

export default axiosInstance;
