import axios from "axios";

const API = "http://localhost:8080";

export const api = axios.create({
  baseURL: API,
});

export const login = async (email, password) => {

  try {
    const response = await api.post(`/login`, {
        email,
        password
    });
    if (response.status == 200) {
        const token = response.headers["authorization"];
        localStorage.setItem("token", token.split(" ")[1]);
    }
    return response;

  } catch (error) {
    console.error(error);
  }

};
export const handlePosts = async () => {

  try {
    const response = await api.get(`/projects`);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
  }
};
export const handleImagePosts = async (post) => {

  try {
    const response = await api.get(`/projects/photo/${post.id}`);
    if (response.status == 200) {
      console.log(`resposta${response.data}`);
      
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
