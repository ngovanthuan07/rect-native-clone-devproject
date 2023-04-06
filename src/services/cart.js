
  import axiosClient from "./axiosClient";


export const addToCart = async (productId, quantity) => {
    try {
      const response = await axiosClient.get("/addToCart", {
        params: {
          product_id: productId,
          quantity: quantity
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  };
export const removeCart = async (cartId) => {
  try {
    const response = await axiosClient.post("/removeCartDetail", {
      id: cartId
    });
    return response;
  } catch (error) {
    return error;
  }
};