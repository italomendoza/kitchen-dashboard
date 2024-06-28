import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Esto permite que el proxy redirija las peticiones correctamente
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;
