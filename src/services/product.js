import {
  saveMediaToStorage,
  removeWithUrlFromStorage,
} from "./handleFileService";
import axiosClient from "./axiosClient";


export const showProductById = (id) => new Promise((resolve, reject) => {
    axiosClient.get(`/product/${id}`)
    .then((response) => {
        resolve(response);
    })
    .catch((error) => {
        reject(error);
    })
  })