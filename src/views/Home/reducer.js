import {
  GET_HEROES_REQUESTING,
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE,
} from './constants';

export const INITIAL_STATE = {
  isRequesting: false,
  success: false,
  error: false,
  content: {}
};

export default function heroes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_HEROES_REQUESTING:
      return {
        ...state,
        isRequesting: true
      };
    case GET_HEROES_SUCCESS:
      return {
        ...state,
        content: action.payload || {},
        isRequesting: false,
        error: false
      };
    case GET_HEROES_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: true
      };
    default:
      return state;
  }
}
