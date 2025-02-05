import axios from "axios";

const api = axios.create({
  baseURL: "https://expense-tracker-assng-zp6s.vercel.app/", // Updated to match prefix
  withCredentials: true, // ✅ This is needed for cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
