import * as actions from "../actions/main/actionTypes";

const initialState = {
  dimension: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  scrollY: window.screenY
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.DIMENSION_CHANGE:
      return {
        ...state,
        dimension: action.dimension
      };
    case actions.SCROLL_Y:
      return {
        ...state,
        scrollY: action.scrollY
      };
    default:
      return state;
  }
};
