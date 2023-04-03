import {
    LOADING
  } from "./../constants/index";
  
  export const loadingSpinner = (loading) => (dispatch) => {
    dispatch({
      loading,
      type: LOADING,
    });
  };