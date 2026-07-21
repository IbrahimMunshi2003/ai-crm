import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getOverview = async () => {
  const res = await axios.get(`${API}/analytics/overview`);
  return res.data;
};

export const getProducts = async () => {
  const res = await axios.get(`${API}/analytics/products`);
  return res.data;
};

export const getDoctors = async () => {
  const res = await axios.get(`${API}/analytics/doctors`);
  return res.data;
};

export const getMonthly = async () => {
  const res = await axios.get(`${API}/analytics/monthly`);
  return res.data;
};

export const getSentiments = async () => {
  const res = await axios.get(`${API}/analytics/sentiments`);
  return res.data;
};

export const getInsights = async () => {
  const res = await axios.get(`${API}/analytics/insights`);
  return res.data;
};