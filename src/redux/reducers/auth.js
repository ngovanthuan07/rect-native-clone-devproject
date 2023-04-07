import { USER_STATE_CHANGE } from "../constants";

const initialState = {
    currentUser: null,
    token: null,
    isSeller: false,
    loaded: false,
}


export const auth = (state = initialState, action) => {
    switch(action.type) {
        case USER_STATE_CHANGE: {
            return {
                ...state,
                currentUser: action.currentUser,
                isSeller: action.isSeller,
                token: action.token,
                loaded: action.loaded,
            }
        }
        default:
            return state
    }
}