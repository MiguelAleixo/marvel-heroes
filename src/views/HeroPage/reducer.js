import {
  GET_HERO_REQUESTING,
  GET_HERO_SUCCESS,
  GET_HERO_FAILURE,
  GET_COMICS_REQUESTING,
  GET_COMICS_SUCCESS,
  GET_COMICS_FAILURE
} from './constants';

export const INITIAL_STATE = {
  isRequesting: false,
  success: false,
  error: false,
  content: {
    results: []
  },
  comics: {
    results: []
  }
};

export default function hero(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_HERO_REQUESTING:
      return {
        ...state,
        isRequesting: true
      };
    case GET_HERO_SUCCESS:
      return {
        ...state,
        content: action.payload || {},
        isRequesting: false,
        error: false
      };
    case GET_HERO_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: true
      };
    case GET_COMICS_REQUESTING:
      return {
        ...state,
        isRequesting: true
      };
    case GET_COMICS_SUCCESS:
      return {
        ...state,
        comics: action.payload || {},
        isRequesting: false,
        error: false
      };
    case GET_COMICS_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: true
      };
    default:
      return state;
  }
}
