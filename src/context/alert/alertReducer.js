import { SET_ALERT_MSG, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT_MSG:
      return {
        ...state,
        alert: action.payload
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null
      };
    default:
      return state;
  }
};
