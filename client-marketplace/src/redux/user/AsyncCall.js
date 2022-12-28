import axios from "axios";
export const fetchUserApi = async () => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/auth/login/success`;
    const { data } = await axios.get(url, { withCredentials: true });
    return data;
  } catch (error) {
    return;
  }
};
