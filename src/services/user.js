import axiosClient from "./axiosClient";
import app from "./firebaseService";
import {
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
  refFromURL,
} from "firebase/storage";
import {
  saveMediaToStorage,
  removeWithUrlFromStorage,
} from "./handleFileService";

const storage = getStorage(app);

export const updateUserProfile = async (data, avatarOld, backgroundOld) => {
  try {
    let avatarNewURL = data.avatar;
    let backgroundNewURL = data.background;
    if (avatarNewURL !== avatarOld) {
      const removeStatus = await removeWithUrlFromStorage(avatarOld);
      console.log(
        "REMOVE AVATAR: ",
        removeStatus ? "remove avatar successfully" : "remove avatar failed"
      );
    }
    if (backgroundNewURL !== backgroundOld) {
      const removeStatus = await removeWithUrlFromStorage(backgroundOld);
      console.log(
        "REMOVE BACKGROUND: ",
        removeStatus ? "remove background successfully" : "remove avatar failed"
      );
    }

    if (avatarNewURL && avatarNewURL !== avatarOld) {
      avatarNewURL = await saveMediaToStorage(avatarNewURL, "/avatars");
    }
    if (backgroundNewURL && backgroundNewURL !== backgroundOld) {
      backgroundNewURL = await saveMediaToStorage(
        backgroundNewURL,
        "/backgrounds"
      );
    }

    const update = {
      ...data,
      avatar: avatarNewURL,
      background: backgroundNewURL,
    };

    console.log(update);

    const response = await axiosClient.post("/updateProfile", update);
    return response;
  } catch (error) {
    return error;
  }
};

export const saveUserField = (field, value) =>
  new Promise((resolve, reject) => {
    axiosClient
      .put("/saveUserField", {
        field: field,
        value: value,
      })
      .then((response) => {
        console.log(response.data);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const queryUsersByField = async (field, searchTerm) => {
  try {
    const response = await axiosClient.post("/searchUserByField", {
      field: field,
      searchTerm: searchTerm
    });
    
    return response?.data?.users ?? [];
  } catch (error) {
    console.log("Search Error", error);
    return []
  }
}

export const getMe = async () => {
  try {
    const response = await axiosClient.get("/me");
    if (response?.data?.user != null && response?.status === 200) {
      const user = response.data.user;

      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log("UserAuthStateListener Error", error);
    return null
  }
};

export const signUpSellerService = async (data) => {
  try {
    const response = await axiosClient.post("/signUpSeller", data);
    return response?.data?.success ? true : false;
  } catch (error) {
    console.log(error)
    return false;
  }
};
