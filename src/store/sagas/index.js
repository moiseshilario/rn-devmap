import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';

import { addUser } from './user';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.ADD_USER_REQUEST, addUser)]);
}
