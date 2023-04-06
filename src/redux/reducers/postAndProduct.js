
import { DISPLAY_USER_POST_PRODUCT } from "../constants";

const initialState = {
    posts: [],
    products: []
}


export const postAndProduct = (state = initialState, action) => {
    switch(action.type) {
        case DISPLAY_USER_POST_PRODUCT: {
            return {
                ...state,
                posts: action.posts,
                products: action.products
            }
        }
        default:
            return state
    }
}