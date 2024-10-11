import axiosInstance from "./axiosInstance";

export const GetAllUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/getAllUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const PaymentAcceptment = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.put(
      `/paymentConfirmation/${id}`,
      {
        status: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const PaymentDecline = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.put(
      `/paymentConfirmation/${id}`,
      {
        status: 2,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
