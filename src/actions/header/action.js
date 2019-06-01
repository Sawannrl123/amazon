import { MENU_CHANGED } from './actionTypes';

export const changeMenu = (menu) => dispatch => {
  dispatch({
    type: MENU_CHANGED,
    menu
  })
}