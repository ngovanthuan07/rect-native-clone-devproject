import {CART} from './../constants'


const initialState = {
    cartDetails: []
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case CART: {
            return {
                ...state,
                cartDetails: action.cartDetails
            }
        }
        default:
            return state;
    }
}
