import axios from "axios";

console.log(process.env)
const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "https://satyam-intelligence-api-prod-4ingqtr2ua-uc.a.run.app",
});

export default api;