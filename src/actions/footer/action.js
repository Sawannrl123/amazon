import { LINK_CLICKED } from './actionTypes';

export const linkClicked = (link) => dispatch => {
  dispatch({
    type: LINK_CLICKED,
    link
  })
}