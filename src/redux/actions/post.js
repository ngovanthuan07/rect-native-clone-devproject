import axiosClient from '../../services/axiosClient';
import {
    DISPLAY_USER_POST,
    
} from './../constants'

export const displayUserPosts = () => async(dispatch) => {
    try {
        const response = await axiosClient.get('/display-user-posts')
        dispatch({
          type: DISPLAY_USER_POST,
          posts: response?.data?.success ? response.data.posts : []
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: DISPLAY_USER_POST,
            posts: []
        })
    }
}