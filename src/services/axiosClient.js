import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "../constants";

const axiosClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

// Add a request interceptor to set the Authorization header for every request
// Add a request interceptor to set the Authorization header for every request
axiosClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } 

    if (config.useFormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
