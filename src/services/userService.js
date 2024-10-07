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
