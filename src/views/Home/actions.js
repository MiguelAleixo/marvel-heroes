import {
  GET_HEROES_REQUESTING,
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE,
  FAV_HERO_REQUESTING,
  FAV_HERO_SUCCESS
} from './constants';
import api from '../../providers/api';
import { KEYS } from '../../constants/keys';

export function getHeroes(favorites) {
  return dispach => {
    dispach({ type: GET_HEROES_REQUESTING });
    return api
      .get(`characters?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .then(res => {
        favorites.forEach(item => {
          res.data.data.results.find(hero => hero.id === item.id).fav = true;
        });
        dispach({
          type: GET_HEROES_SUCCESS,
          payload: res.data.data
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

export function searchHeroe(value, favorites) {
  const params = value ? `nameStartsWith=${value}` : '';
  return dispach => {
    dispach({ type: GET_HEROES_REQUESTING });
    return api
      .get(`characters?${params}&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .then(res => {
        favorites.forEach(item => {
          if (res.data.data.results.find(hero => hero.id === item.id)) {
            res.data.data.results.find(hero => hero.id === item.id).fav = true;
          }
        });
        dispach({
          type: GET_HEROES_SUCCESS,
          payload: res.data.data
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

export function favoriteHero(hero) {
  return dispach => {
    dispach({ type: FAV_HERO_REQUESTING });
    hero.fav = !hero.fav;
    dispach({
      type: FAV_HERO_SUCCESS,
      payload: hero
    });
  };
}
