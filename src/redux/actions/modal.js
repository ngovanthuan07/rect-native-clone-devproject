import { CLEAR_MODAL, MODAL_OPEN_COMMENT_SECTION, MODAL_OPEN_HOME_PLUS_SECTION } from '../constants'

export const openCommentModal = (open, data) => (dispatch) => {
    return dispatch({
        data,
        open,
        modalType: 0,
        type: MODAL_OPEN_COMMENT_SECTION
    })
}

export const openHomePlusModal = (open, snapPoints) => (dispatch) => {
    return dispatch({
        open,
        snapPoints,
        modalType: 0,
        type: MODAL_OPEN_HOME_PLUS_SECTION
    })
}

export const clearModal = () => (dispatch) => {
    return dispatch({
        type: CLEAR_MODAL
    })
}