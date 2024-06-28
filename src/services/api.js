import axios from 'axios';


const kitchenApiClient = axios.create({
  baseURL: process.env.VUE_APP_KITCHEN_API_URL || '/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const ingredientsApiClient = axios.create({
  baseURL: process.env.VUE_APP_INGREDIENTS_API_URL || '/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export { kitchenApiClient, ingredientsApiClient };
