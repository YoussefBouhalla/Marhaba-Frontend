import axios from "axios"

const AppURL = "http://localhost:4000/meals";

export function searchMeals(data) {
    return axios.post(`${AppURL}/search`, data);
}