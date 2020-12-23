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
  console.log('roda isso aqui')
  return dispach => {
    dispach({ type: GET_HEROES_REQUESTING });
    return api
      .get(`characters?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .then(res => {
        console.log('seta', favorites)
        favorites.map(item => {
          res.data.data.results.find(hero => hero.id === item.id).fav = true;
        });
        console.log('PRECISA VIR AASSIM', res.data.data)
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
        favorites.map(item => {
          if (res.data.data.results.find(hero => hero.id === item.id)) {
            res.data.data.results.find(hero => hero.id === item.id).fav = true;
          }
        });
        console.log('PRECISA VIR AASSIM', res.data.data)
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

export function favoriteHero(chosen, heroes) {
  return dispach => {
    console.log('CHOSEN', chosen)
    console.log('HEROES', heroes)
    dispach({ type: FAV_HERO_REQUESTING });
    const payload = heroes.content.results.find(hero => hero.id == chosen.id);
    console.log('PAYLOAD', payload)
    payload.fav = !payload.fav;
    dispach({
      type: FAV_HERO_SUCCESS,
      payload: payload
    });
  };
}
