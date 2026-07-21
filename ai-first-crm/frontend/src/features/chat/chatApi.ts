import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function sendMessage(
  message: string,
  interaction: any
) {
  const { data } = await api.post("/chat/", {
    message,
    interaction,
  });

  return data;
}