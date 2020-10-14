import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.15.3:3333',
});

export default api;
