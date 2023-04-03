import {
  saveMediaToStorage,
  removeWithUrlFromStorage,
} from "./handleFileService";
import axiosClient from "./axiosClient";

export const createRoom = async (data) => {
  try {
    const image = await saveMediaToStorage(data["image"], "/images");
    data = {
      ...data,
      image,
    }
    
    const response = await axiosClient.post("/createRoom", data);
    
    return response;
  } catch (error) {
    return error;
  }
};

export const showRoomService = async (id) => {
  try {
    const response = await axiosClient.get(`/showRoom/${id}`);
    
    return response?.data?.room ?? null;
  } catch (error) {
    return null;
  }
};
export const inviteRoom = async (data) => {
  try {
    const response = await axiosClient.post('inviteMember', data);
    
    return response?.data?.success ?? false;
  } catch (error) {
    return false;
  }
};
