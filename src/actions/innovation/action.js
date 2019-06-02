import { TOGGLE_POPUP, SUBMIT_QUERY } from './actionTypes';

export const togglePopup = (popupData) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: TOGGLE_POPUP,
      popupData
    });
    resolve(true);
  });
}

export const submitQuery = (contactData) => dispatch => {
  return new Promise(resolve => {
    dispatch({
      type: SUBMIT_QUERY,
      contactData
    });
    resolve(true);
  });
}