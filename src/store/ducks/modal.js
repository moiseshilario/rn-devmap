/**
 * Types
 */
export const Types = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};

/**
 * Actions
 */
export const Actions = {
  showModal: coordinates => ({
    type: Types.SHOW_MODAL,
    payload: { coordinates },
  }),
  hideModal: () => ({
    type: Types.HIDE_MODAL,
  }),
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
  modalVisible: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return {
        coordinates: {
          latitude: action.payload.coordinates[1],
          longitude: action.payload.coordinates[0],
        },
        modalVisible: true,
      };
    case Types.HIDE_MODAL:
      return {
        coordinates: {
          latitude: null,
          longitude: null,
        },
        modalVisible: false,
      };
    default:
      return state;
  }
}
