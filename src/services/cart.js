
  import axiosClient from "./axiosClient";


export const addToCart = async (postId, quantity) => {
    try {
      const response = await axiosClient.get("/addToCart", {
        params: {
          post_id: postId,
          quantity: quantity
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  };