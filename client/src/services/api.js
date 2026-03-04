import axios from "axios";

const API = axios.create({
 baseURL: "http://localhost:5000/api"
});

export const generateCategory = (data) => {
 return API.post("/category/generate", data);
};

export const generateProposal = (data) => {
 return API.post("/proposal/generate", data);
};