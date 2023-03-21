import { CLEAR_MODAL, MODAL_OPEN_COMMENT_SECTION, MODAL_OPEN_HOME_PLUS_SECTION } from '../constants';

const initialState = {
    open: false,
    data: null,
    snapPoints: [],
    modalType: -1,
}

export const modal = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN_COMMENT_SECTION:
            return {
                ...state,
                open: action.open,
                data: action.data,
                modalType: action.modalType,
            }
        case MODAL_OPEN_HOME_PLUS_SECTION:
            return {
                ...state,
                open: action.open,
                snapPoints: action.snapPoints,
                data: null,
                modalType: action.modalType,
            }    
        case CLEAR_MODAL:
            return initialState;
        default:
            return state;
    }
}