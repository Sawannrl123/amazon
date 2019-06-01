import * as actions from "../actions/header/actionTypes";
import { APP_NAME } from '../utils/globalConstants'

const menus = [
  {id: 1, title: 'Home', slug: 'home'},
  {id: 2, title: 'Innovation Stories', slug: 'innovation'},
  {id: 3, title: 'Technology', slug: 'technology'},
  {id: 4, title: `Connect with ${APP_NAME.split(' ')[0]}`, slug: 'connect'}
]

const initialState = {
  menus,
  activeMenu: menus[0],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.MENU_CHANGED:
      return {
        ...state,
        activeMenu: action.menu
      };
    default:
      return state;
  }
};
