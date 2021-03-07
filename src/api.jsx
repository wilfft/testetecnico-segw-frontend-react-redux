import axios from "axios";
const API_URL = "http://localhost:8080";

export const fetchPosts = async () => {
  return await axios.get(`${API_URL}/api/postagens`);
};
export const salvaPost = async (dadosPost) => {
  return await axios.post(`${API_URL}/api/postagens`, dadosPost);
};
export const upvotePost = async (idPost) => {
  return await axios.put(`${API_URL}/api/postagens/upvote?id=${idPost}`);
};
