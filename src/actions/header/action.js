import { MENU_CHANGED, TOGGLE_MENU } from './actionTypes';

export const changeMenu = (menu) => dispatch => {
  dispatch({
    type: MENU_CHANGED,
    menu
  })
}

export const toggleMobileMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_MENU,
  })
}