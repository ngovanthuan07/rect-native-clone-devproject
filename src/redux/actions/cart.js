import axiosClient from '../../services/axiosClient';
import {CART} from './../constants'


export const loadCartDetail = () => async (dispatch) => {
    try {
        const response = await axiosClient.get("/showCartDetail");
        if(response?.data?.status) {
            const cartDetails = response?.data?.card_details
            return dispatch({
                cartDetails,
                type: CART,
            });
        } else {
            return dispatch({
                cartDetails: [],
                type: CART,
            });
        }
      } catch (error) {
        console.log(error)
        return dispatch({
            cartDetails: [],
            type: CART,
        });
      }
    
  };