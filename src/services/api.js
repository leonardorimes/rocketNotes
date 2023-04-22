import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-mb2d.onrender.com"

});

