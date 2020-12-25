import {
  GET_HEROES_REQUESTING,
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE,
  FAV_HERO_REQUESTING,
  FAV_HERO_SUCCESS,
  FAV_HERO_FAILURE
} from '../constants';
import reducer, { INITIAL_STATE } from '../reducer';
import { heroes, favorites } from '../__mocks__/heroes-mocks';

describe('heroes: reducer', () => {
  it('should return the initial state', () => {
    const heroesReducer = reducer(undefined, {});

    expect(heroesReducer).toEqual(INITIAL_STATE);
  });

  it('should handle GET_HEROES_REQUESTING', () => {
    const heroesReducer = reducer(
      INITIAL_STATE,
      { type: GET_HEROES_REQUESTING }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequesting: true
    };

    expect(heroesReducer).toEqual(expected);
  });

  it('should handle GET_HEROES_SUCCESS', () => {
    const payload = heroes;

    const heroesReducer = reducer(
      INITIAL_STATE,
      { type: GET_HEROES_SUCCESS, payload }
    );

    const expected = {
      ...INITIAL_STATE,
      content: payload,
      isRequesting: false
    };

    expect(heroesReducer).toEqual(expected);
  });

  it('should handle GET_HEROES_FAILURE', () => {
    const heroesReducer = reducer(
      INITIAL_STATE,
      { type: GET_HEROES_FAILURE }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequesting: false,
      error: true
    };

    expect(heroesReducer).toEqual(expected);
  });

  it('should handle FAV_HERO_REQUESTING', () => {
    const heroesReducer = reducer(
      INITIAL_STATE,
      { type: FAV_HERO_REQUESTING }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequesting: true
    };

    expect(heroesReducer).toEqual(expected);
  });

  it('should handle FAV_HERO_SUCCESS', () => {
    const payload = favorites;

    const heroesReducer = reducer(
      INITIAL_STATE,
      { type: FAV_HERO_SUCCESS, payload }
    );

    const expected = {
      ...INITIAL_STATE,
      favorites: payload,
      isRequesting: false
    };

    expect(heroesReducer).toEqual(expected);
  });

  it('should handle FAV_HERO_FAILURE', () => {
    const heroesReducer = reducer(
      INITIAL_STATE,
      { type: FAV_HERO_FAILURE }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequesting: false,
      error: true
    };

    expect(heroesReducer).toEqual(expected);
  });
});
