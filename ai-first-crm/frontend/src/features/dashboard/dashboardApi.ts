import axios from "axios";

export const getDashboardStats = async () => {
  const response = await axios.get(
    "http://localhost:8000/dashboard/stats"
  );

  return response.data;
};