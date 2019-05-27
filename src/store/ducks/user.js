/**
 * Types
 */
export const Types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
};

/**
 * Actions
 */
export const Actions = {
  addUserRequest: username => ({
    type: Types.ADD_USER_REQUEST,
    payload: { username },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data },
  }),
  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error },
  }),
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  users: [],
  loading: false,
  error: '',
};

export default function usersData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return { ...state, loading: true, error: '' };
    case Types.ADD_USER_SUCCESS:
      return {
        users: [...state.users, action.payload.data],
        loading: false,
        error: '',
      };
    case Types.ADD_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
