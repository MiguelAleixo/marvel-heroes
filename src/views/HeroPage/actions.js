import {
  GET_HERO_REQUESTING,
  GET_HERO_SUCCESS,
  GET_HERO_FAILURE,
  GET_COMICS_REQUESTING,
  GET_COMICS_SUCCESS,
  GET_COMICS_FAILURE
} from './constants';
import api from '../../providers/api';
import { KEYS } from '../../constants/keys';

export function getHero(id, favorites) {
  return dispach => {
    dispach({ type: GET_HERO_REQUESTING });
    return api
      .get(`characters/${id}?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .then(res => {
        favorites.forEach(item => {
          if (res.data.data.results.find(hero => hero.id === item.id)) {
            res.data.data.results.find(hero => hero.id === item.id).fav = true;
          }
        });
        dispach({
          type: GET_HERO_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispach({
          type: GET_HERO_FAILURE,
          payload: err
        });
      });
  };
}

export function getComics(id) {
  return dispach => {
    dispach({ type: GET_COMICS_REQUESTING });
    return api
      .get(`characters/${id}/comics?&orderBy=-onsaleDate&limit=10&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .then(res => {
        // res.data.data.results = res.data.data.results.sort(
        //   (a, b) => a.dates[0].onSaleDate - b.dates[0].onSaleDate
        // ).slice(0, 10);
        dispach({
          type: GET_COMICS_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispach({
          type: GET_COMICS_FAILURE,
          payload: err
        });
      });
  };
}
