import axios from 'axios';


const API = axios.create({ baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api` || 'http://localhost:3000/api' });


export const fetchUsers = () => API.get('/users');
export const createUser = (data: any) => API.post('/users', data)