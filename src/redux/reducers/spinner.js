import {LOADING} from './../constants'


const initialState = {
    loading: false,
  };

export const spinner = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        default:
            return state;
    }
}
