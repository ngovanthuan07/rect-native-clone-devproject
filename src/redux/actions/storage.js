import {
  ADD_PIC_AND_VIDEO,
  REMOVE_PIC_AND_VIDEO,
  CLEAR_ALL_PIC_AND_VIDEO,
} from "./../constants/index";

export const addPicAndVideoStorage = (data) => (dispatch) => {
  dispatch({
    data,
    type: ADD_PIC_AND_VIDEO,
  });
};

export const removePicAndVideoStorage = (dataId) => (dispatch) => {
  dispatch({
    dataId,
    type: REMOVE_PIC_AND_VIDEO,
  });
};

export const clearAll = () => {
  dispatch({
    type: CLEAR_ALL_PIC_AND_VIDEO,
  });
};
