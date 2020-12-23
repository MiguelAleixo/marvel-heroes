import {
  SET_HERO_REQUESTING,
  SET_HERO_SUCCESS,
  SET_HERO_FAILURE
} from './constants';

export const INITIAL_STATE = {
  isRequesting: false,
  success: false,
  error: false,
  content: {},
  favorites: []
};

export default function hero(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_HERO_REQUESTING:
      return {
        ...state,
        isRequesting: true
      };
    case SET_HERO_SUCCESS:
      return {
        ...state,
        content: action.payload || {},
        isRequesting: false,
        error: false
      };
    case SET_HERO_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: true
      };
    default:
      return state;
  }
}
