import axios from "axios";

const API = "http://127.0.0.1:8000";

export async function getFollowups() {
  const res = await axios.get(`${API}/followups`);

  console.log("FOLLOWUPS API:", res.data);

  return res.data;
}