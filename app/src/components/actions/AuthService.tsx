import React from "react";
import axios from "axios";

const base_url = process.env.API_URL;

const login = async (login:any) =>{
  const response = await axios.post(`${base_url}/auth`, login)
 return response.data;
}

const getUsers = async () => {
  const response = await axios.get(`${base_url}/users`);

  return response.data;
};

const getUser = async (id:any) => {
  const response = await axios.get(`${base_url}/users/${id}`);

  return response.data;
};

const deleteUser = async (id:any) => {
  const response = await axios.delete(`${base_url}/users/${id}`);

  return response.data;
};

const updateUser = async (user:any) => {
  const response = await axios.put(
    `${base_url}/users/${user.id}`, { title: user.title },
  );
  return response.data;
};

const AuthService = {
    login,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
}

export default AuthService; 