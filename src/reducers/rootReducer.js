import { combineReducers } from 'redux';
import main from './mainReducer';
import header from './headerReducer';
import footer from './footerReducers';
import innovation from './innovationReducer';
import home from './homeReducer';
import connect from './connectReducer';
import technology from './technologyReducer';

export default combineReducers({
  main,
  header,
  footer,
  innovation,
  home,
  connect,
  technology
});
