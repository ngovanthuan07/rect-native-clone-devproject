import {
    ADD_PIC_AND_VIDEO,
    REMOVE_PIC_AND_VIDEO,
    CLEAR_ALL_PIC_AND_VIDEO,
  } from "./../constants/index";

const initialState = {
    data: [],
}

export const storage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIC_AND_VIDEO:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        case REMOVE_PIC_AND_VIDEO:
            data = state.data.filter((item) => item.id !== action.dataId)
            return {
                ...state,
                data
            }
        case CLEAR_ALL_PIC_AND_VIDEO: 
            return initialState
        default:
            return state;
    }
}