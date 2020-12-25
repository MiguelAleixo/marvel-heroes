import HTTPStatus from 'http-status';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import ReduxThunk from 'redux-thunk';
import { KEYS } from '../../../../constants/keys';
import * as actions from '../actions';
import { INITIAL_STATE } from '../reducer';
import {
  GET_HEROES_REQUESTING,
  GET_HEROES_SUCCESS,
  FAV_HERO_REQUESTING,
  FAV_HERO_SUCCESS,
} from '../constants';
import {
  heroes,
  favHeroes,
  searchHeroes,
  searchNotFoundHeroes,
  searchFavHeroes,
  favorites
} from '../__mocks__/heroes-mocks';

const initialStore = {
  heroes: INITIAL_STATE
};

const mockStore = configureMockStore([ReduxThunk]);

describe('module:heroes', () => {
  it('should get heroes', (done) => {
    const store = mockStore(initialStore);
    const payload = heroes;
    const expectedActions = [
      { type: GET_HEROES_REQUESTING },
      { type: GET_HEROES_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.getHeroes([]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should get heroes with favorite', (done) => {
    const store = mockStore(initialStore);
    const payload = favHeroes;
    const expectedActions = [
      { type: GET_HEROES_REQUESTING },
      { type: GET_HEROES_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.getHeroes(favorites))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should search heroes', (done) => {
    const params = 'spider-man';
    const store = mockStore(initialStore);
    const payload = searchHeroes;
    const expectedActions = [
      { type: GET_HEROES_REQUESTING },
      { type: GET_HEROES_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters?${params}&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.searchHeroe(params, []))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should not found search heroes', (done) => {
    const params = 'batman';
    const store = mockStore(initialStore);
    const payload = searchNotFoundHeroes;
    const expectedActions = [
      { type: GET_HEROES_REQUESTING },
      { type: GET_HEROES_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters?${params}&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.searchHeroe(params, []))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should search heroes with favorite', (done) => {
    const params = '3-D Man';
    const store = mockStore(initialStore);
    const payload = searchFavHeroes;
    const expectedActions = [
      { type: GET_HEROES_REQUESTING },
      { type: GET_HEROES_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters?${params}&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.searchHeroe(params, favorites))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should fav hero', (done) => {
    const store = mockStore(initialStore);
    const payload = favorites;
    const expectedActions = [
      { type: FAV_HERO_REQUESTING },
      { type: FAV_HERO_SUCCESS, payload }
    ];

    store.dispatch(actions.favoriteHero(favorites[0], []))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should empty fav hero', (done) => {
    const store = mockStore(initialStore);
    const payload = [];
    const expectedActions = [
      { type: FAV_HERO_REQUESTING },
      { type: FAV_HERO_SUCCESS, payload }
    ];

    store.dispatch(actions.favoriteHero(favorites[0], favorites))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
