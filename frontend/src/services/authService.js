import axios from "../utils/axios";

export const register = async (username, password) => {
  try {
    const response = await axios.post("/auth/register", { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", { username, password });
    const { token } = response.data;

    // saving token to localStorage
    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
      "/logout",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // Remove token from localStorage
    localStorage.removeItem("token");
  } catch (error) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
};
