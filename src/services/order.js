import {
  saveMediaToStorage,
  removeWithUrlFromStorage,
} from "./handleFileService";
import axiosClient from "./axiosClient";

export const paymentService = async (data) => {
  try {
    const response = await axiosClient.post("/payment", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const paymentComplete = async () => {
  try {
    const response = await axiosClient.post("/payment-success");
    return response?.data?.success ? true : false;
  } catch (error) {
    return false;
  }
}