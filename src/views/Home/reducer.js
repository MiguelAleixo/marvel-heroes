import {
  GET_HEROES_REQUESTING,
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE,
  FAV_HERO_REQUESTING,
  FAV_HERO_SUCCESS,
  FAV_HERO_FAILURE
} from './constants';

export const INITIAL_STATE = {
  isRequesting: false,
  success: false,
  error: false,
  content: {
    results: []
  },
  favorites: []
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
    case FAV_HERO_REQUESTING:
      return {
        ...state,
        isRequesting: true
      };
    case FAV_HERO_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
        isRequesting: false,
        error: false
      };
    case FAV_HERO_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: true
      };
    default:
      return state;
  }
}
