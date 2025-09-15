import axios from 'axios';


const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:5000/api' });


export const fetchUsers = () => API.get('/users');
export const createUser = (data: any) => API.post('/users', data)