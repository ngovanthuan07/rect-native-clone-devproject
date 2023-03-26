
import { DISPLAY_USER_POST } from "../constants";

const initialState = {
    posts: [],
}


export const posts = (state = initialState, action) => {
    switch(action.type) {
        case DISPLAY_USER_POST: {
            return {
                ...state,
                posts: action.posts,
            }
        }
        default:
            return state
    }
}