import { DIMENSION_CHANGE } from './actionTypes';

export const updateDimensions = (dimension) => dispatch => {
  dispatch({
    type: DIMENSION_CHANGE,
    dimension
  })
}