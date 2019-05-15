import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import suggestionBox from './suggestionBox';

export default combineReducers({
  simpleReducer,
  suggestionBox
});
