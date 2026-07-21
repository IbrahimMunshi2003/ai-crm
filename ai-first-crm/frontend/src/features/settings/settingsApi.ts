import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getSettings = async () => {
  const res = await axios.get(`${API}/settings`);
  return res.data;
};

export const saveSettings = async (data: any) => {
  const res = await axios.post(`${API}/settings`, data);
  return res.data;
};