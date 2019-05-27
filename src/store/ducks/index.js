import { combineReducers } from 'redux';

import modal from './modal';
import usersData from './user';

export default combineReducers({
  modal,
  usersData,
});
