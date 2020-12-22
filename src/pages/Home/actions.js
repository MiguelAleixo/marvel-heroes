import {
  GET_HEROES_REQUESTING,
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE,
} from './constants';
import api from '../../providers/api';
import KEYS from '../../constants/keys';

export function getHeroes() {
  return dispach => {
    dispach({ type: GET_HEROES_REQUESTING });
    return api
      .get(`characters?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .then(res => {
        dispach({
          type: GET_HEROES_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispach({
          type: GET_HEROES_FAILURE,
          payload: err
        });
      });
  };
}

export function searchHeroe(value) {
  const params = value ? `nameStartsWith=${value}` : '';
  return dispach => {
    dispach({ type: GET_HEROES_REQUESTING });
    return api
      .get(`characters?${params}&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .then(res => {
        dispach({
          type: GET_HEROES_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispach({
          type: GET_HEROES_FAILURE,
          payload: err
        });
      });
  };
}
