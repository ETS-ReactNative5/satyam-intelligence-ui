import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "https://satyam-intelligence-api.herokuapp.com/",
});

export default api;