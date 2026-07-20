import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getSettings = async () => {
  const res = await axios.get(`${API}/settings`);
  return res.data;
};

export const saveSettings = async (data: any) => {
  const res = await axios.post(`${API}/settings`, data);
  return res.data;
};