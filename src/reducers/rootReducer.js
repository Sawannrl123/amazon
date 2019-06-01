import { combineReducers } from 'redux';
import main from './mainReducer';
import header from './headerReducer';

export default combineReducers({
  main,
  header,
});
