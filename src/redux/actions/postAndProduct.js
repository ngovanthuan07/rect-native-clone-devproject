import axiosClient from '../../services/axiosClient';
import {
    DISPLAY_USER_POST_PRODUCT,
    
} from '../constants'

export const displayUserPostAndProduct = () => async(dispatch) => {
    try {
        const response = await axiosClient.get('/display-user-post-product')
        dispatch({
          type: DISPLAY_USER_POST_PRODUCT,
          posts: response?.data?.success ? response.data.posts : [],
          products: response?.data?.success ? response.data.products : [],
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: DISPLAY_USER_POST_PRODUCT,
            posts: [],
            products: []
        })
    }
}
export const displayPosts = () => async(dispatch) => {
    try {
        const response = await axiosClient.get('/display-posts')
        dispatch({
          type: DISPLAY_USER_POST_PRODUCT,
          posts: response?.data?.success ? response.data.posts : [],
          products: response?.data?.success ? response.data.products : [],
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: DISPLAY_USER_POST_PRODUCT,
            posts: [],
            products: []
        })
    }
}