import axiosInstance from "./axiosInstance";

export const GetUserById = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/getUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.put(`/updateUser`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const RegisterEvent = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.post(`/RegisterEvent`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CountUser = async () => {
  try {
    const token = import.meta.env.VITE_TOKEN;
    const response = await axiosInstance.get(`/countPayment`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
