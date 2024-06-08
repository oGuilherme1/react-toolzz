import axios from 'axios';
import { Navigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('Erro de autenticação. Token inválido ou expirado.');
    }
    return Promise.reject(error);
  }
);

export const handleLogin = async (data) => {
  try {
    const response = await instance.post('/login', data);
    const { token } = response.data;

    if(response !== 'Token already generated'){
      localStorage.setItem('token', token);
    }

    return { success: true, token };
  } catch (error) {
    console.log(error)
    return { success: false, error };
  }
};

export const handleRegister = async (data) => {
  try {
    const response = await instance.post('/register', data);

    return { success: true};
  } catch (error) {

    return { success: false, error };
  }
};

export const handleLogout = async (data) => {
  try {
    const response = await instance.post('/logout', data);

    localStorage.clear();

    return { success: true};
  } catch (error) {

    return { success: false, error };
  }
};

export default instance;
