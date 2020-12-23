import {
  SET_HERO_REQUESTING,
  SET_HERO_SUCCESS,
  SET_HERO_FAILURE
} from './constants';

export function setHero(id, heroes, history) {
  return dispach => {
    dispach({ type: SET_HERO_REQUESTING });
    if (heroes.content.results) {
      const payload = heroes.content.results.find(hero => hero.id === +id);
      dispach({
        type: SET_HERO_SUCCESS,
        payload
      });
    } else {
      history.push('/');
      dispach({
        type: SET_HERO_FAILURE
      });
    }
  };
}
