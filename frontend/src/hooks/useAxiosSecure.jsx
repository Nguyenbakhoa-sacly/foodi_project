

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';


const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API} `
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    }, (err) => {
      return Promise.reject(err);
    })

  // add a response interceptor
  axiosSecure.interceptors.response.use((response) => {
    return response;
  }, async (err) => {
    const status = err.response.status;
    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login');
    }
    return Promise.reject(err);
  })
  return axiosSecure
}

export default useAxiosSecure
