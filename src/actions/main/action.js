import { DIMENSION_CHANGE, SCROLL_Y } from './actionTypes';

export const updateDimensions = (dimension) => dispatch => {
  dispatch({
    type: DIMENSION_CHANGE,
    dimension
  })
}

export const handleScroll = (scrollY) => dispatch => {
  dispatch({
    type: SCROLL_Y,
    scrollY
  })
}