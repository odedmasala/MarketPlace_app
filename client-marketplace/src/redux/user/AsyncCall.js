import axios from "axios";
export const fetchUserApi = async () => {
  try {
    const url = `http://localhost:8001/api/auth/login/success`;
    const { data } = await axios.get(url, { withCredentials: true });
    return data;
  } catch (error) {
    return;
  }
};
