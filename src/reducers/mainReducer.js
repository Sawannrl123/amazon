import * as actions from "../actions/main/actionTypes";

const initialState = {
  dimension: {
    width: window.innerWidth,
    height: window.innerHeight
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.DIMENSION_CHANGE:
      return {
        ...state,
        dimension: action.dimension
      };
    default:
      return state;
  }
};
