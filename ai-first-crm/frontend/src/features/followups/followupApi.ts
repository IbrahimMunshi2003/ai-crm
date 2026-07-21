import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export async function getFollowups() {
  const res = await axios.get(`${API}/followups`);
  return res.data;
}