import {
    saveMediaToStorage,
    removeWithUrlFromStorage,
  } from "./handleFileService";
  import axiosClient from "./axiosClient";

export const mSearchable = (searchable) => new Promise((resolve, reject) => {
    axiosClient.get(`/searchable/${searchable}`)
    .then((response) => {
        resolve(response);
    })
    .catch((error) => {
        reject(error);
    })
  })
  