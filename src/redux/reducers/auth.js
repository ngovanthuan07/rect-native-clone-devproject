import { USER_STATE_CHANGE } from "../constants";

const initialState = {
    currentUser: null,
    token: null,
    loaded: false,
}


export const auth = (state = initialState, action) => {
    switch(action.type) {
        case USER_STATE_CHANGE: {
            return {
                ...state,
                currentUser: action.currentUser,
                token: action.token,
                loaded: action.loaded,
            }
        }
        default:
            return state
    }
}