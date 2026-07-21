import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getDashboardStats = async () => {
  const response = await axios.get(`${API}/dashboard/stats`);
  return response.data;
};