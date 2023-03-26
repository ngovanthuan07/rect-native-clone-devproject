import {
  saveMediaToStorage,
  removeWithUrlFromStorage,
} from "./handleFileService";
import axiosClient from "./axiosClient";

export const createPicAndVideoHome = async (data) => {
  let assets = [];

  try {
    for (let item of data["assets"]) {
      if (item["type"] === "image") {
        assets.push({
          uri: await saveMediaToStorage(item["uri"], "/images"),
          type: item["type"],
        });
      } else {
        if (item["type"] === "video") {
          assets.push({
            uri: await saveMediaToStorage(item["uri"], "/videos"),
            type: item["type"],
          });
        }
      }
    }

    const response = await axiosClient.post("/createPost/home", {
      ...data,
      assets,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const checkLikePost = async (postId) => {
  try {
    const response = await axiosClient.post("/like", {
      post_id: postId,
      checked: true,
    });
    return response?.data?.status ? true : false;
  } catch (error) {
    return false;
  }
};

export const likePost = async (postId) => {
  try {
    const response = await axiosClient.post("/like", {
      post_id: postId,
      checked: false,
    });
    return response?.data?.status ? true : false;
  } catch (error) {
    return false;
  }
};

export const countLikePost = async (postId) => {
  try {
    const response = await axiosClient.get("/count-like-post", {
      params: {
        post_id: postId,
      },
    });
    return response?.data?.count ?? 0;
  } catch (error) {
    return 0;
  }
};

export const getAllCommentByIdPost = async (postId) => {
  try {
    const response = await axiosClient.get(`/messages/${postId}`);
    return response?.data?.success ? response.data.messages : [];
  } catch (error) {
    return [];
  }
};
export const createMessage = async (postId, content) => {
  try {
    const response = await axiosClient.post("/messages/add", {
      post_id: postId,
      content: content
    });
    return response?.data?.success ? true : false;
  } catch (error) {
    return false;
  }
};


export const displayUserPosts = async (data) => {
  try {
    const response = await axiosClient.get("/display-user-posts");
    return response;
  } catch (error) {
    return error;
  }
};
