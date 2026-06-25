import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://chatz-real-time-chat-app.onrender.com/api",
  withCredentials: true,
});
