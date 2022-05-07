import axios from "axios"

const AppURL = "http://localhost:4000/users";

export function login(data) {
    return axios.post(`${AppURL}/login`, data);
}

export function register(data) {
    return axios.post(`${AppURL}/register`, data);
}