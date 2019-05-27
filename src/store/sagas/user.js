import { put, call, select } from 'redux-saga/effects';

import api from '~/services/api';

import { Actions as UserActions } from '../ducks/user';
import { Actions as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { username } = action.payload;
    const { data } = yield call(api.get, `/users/${username}`);

    const location = yield select(state => state.modal.coordinates);
    const user = {
      id: data.id,
      login: data.login,
      name: data.name,
      bio: data.bio,
      avatar: data.avatar_url,
      location,
    };

    yield put(UserActions.addUserSuccess(user));
    yield put(ModalActions.hideModal());
  } catch (err) {
    yield put(UserActions.addUserFailure('User not found!'));
  }
}
