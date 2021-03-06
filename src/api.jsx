import axios from "axios";
const API_URL = "http://localhost:8080";

export const carregaPosts = () => {
  return axios(`${API_URL}/api/postagens`);
};
export const salvaPost = (dadosPost) => {
  return axios(`${API_URL}/api/postagens`, dadosPost);
};
export const votaPost = (idPost) => {
  return axios(`${API_URL}/api/postagens/${idPost}`);
};
