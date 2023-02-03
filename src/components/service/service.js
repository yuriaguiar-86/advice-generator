import axios from "axios";

const service = axios.create({
    baseURL: 'https://api.adviceslip.com',
});

export default service;