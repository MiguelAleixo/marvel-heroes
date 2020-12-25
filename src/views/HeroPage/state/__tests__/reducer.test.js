import {
  GET_HERO_REQUESTING,
  GET_HERO_SUCCESS,
  GET_HERO_FAILURE,
  GET_COMICS_REQUESTING,
  GET_COMICS_SUCCESS,
  GET_COMICS_FAILURE
} from '../constants';
import reducer, { INITIAL_STATE } from '../reducer';
import { hero, comics } from '../__mocks__/hero-mocks';

describe('hero: reducer', () => {
  it('should return the initial state', () => {
    const heroReducer = reducer(undefined, {});

    expect(heroReducer).toEqual(INITIAL_STATE);
  });

  it('should handle GET_HERO_REQUESTING', () => {
    const heroReducer = reducer(
      INITIAL_STATE,
      { type: GET_HERO_REQUESTING }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequestingHero: true
    };

    expect(heroReducer).toEqual(expected);
  });

  it('should handle GET_HERO_SUCCESS', () => {
    const payload = hero;

    const heroReducer = reducer(
      INITIAL_STATE,
      { type: GET_HERO_SUCCESS, payload }
    );

    const expected = {
      ...INITIAL_STATE,
      content: payload,
      isRequestingHero: false
    };

    expect(heroReducer).toEqual(expected);
  });

  it('should handle GET_HERO_FAILURE', () => {
    const heroReducer = reducer(
      INITIAL_STATE,
      { type: GET_HERO_FAILURE }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequestingHero: false,
      error: true
    };

    expect(heroReducer).toEqual(expected);
  });

  it('should handle GET_COMICS_REQUESTING', () => {
    const heroReducer = reducer(
      INITIAL_STATE,
      { type: GET_COMICS_REQUESTING }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequestingComics: true
    };

    expect(heroReducer).toEqual(expected);
  });

  it('should handle GET_COMICS_SUCCESS', () => {
    const payload = comics;

    const heroReducer = reducer(
      INITIAL_STATE,
      { type: GET_COMICS_SUCCESS, payload }
    );

    const expected = {
      ...INITIAL_STATE,
      comics: payload,
      isRequestingComics: false
    };

    expect(heroReducer).toEqual(expected);
  });

  it('should handle GET_COMICS_FAILURE', () => {
    const heroReducer = reducer(
      INITIAL_STATE,
      { type: GET_COMICS_FAILURE }
    );

    const expected = {
      ...INITIAL_STATE,
      isRequestingComics: false,
      error: true
    };

    expect(heroReducer).toEqual(expected);
  });
});
