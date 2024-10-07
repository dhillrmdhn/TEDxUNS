import axiosInstance from "./axiosInstance";

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/register", {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
