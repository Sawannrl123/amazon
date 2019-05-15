import { SHOW_USERS_LIST, USER_ADDED, USER_REMOVED } from "./actionTypes";

export const showSuggestionList = status => dispatch => {
  dispatch({
    type: SHOW_USERS_LIST,
    status
  })
};

export const addUser = user => dispatch => {
  dispatch({
    type: USER_ADDED,
    user
  })
};

export const removeUser = (index) => dispatch => {
  dispatch({
    type: USER_REMOVED,
    index
  })
};
