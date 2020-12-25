import HTTPStatus from 'http-status';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import ReduxThunk from 'redux-thunk';
import { KEYS } from '../../../../constants/keys';
import * as actions from '../actions';
import { INITIAL_STATE } from '../reducer';
import {
  GET_HERO_REQUESTING,
  GET_HERO_SUCCESS,
  GET_COMICS_REQUESTING,
  GET_COMICS_SUCCESS
} from '../constants';
import {
  hero,
  favHero,
  comics,
  favorites
} from '../__mocks__/hero-mocks';

const initialStore = {
  heroes: INITIAL_STATE
};

const mockStore = configureMockStore([ReduxThunk]);

describe('hero: actions', () => {
  it('should get hero', (done) => {
    const id = 1011334;
    const store = mockStore(initialStore);
    const payload = hero;
    const expectedActions = [
      { type: GET_HERO_REQUESTING },
      { type: GET_HERO_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters/${id}?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.getHero(id, []))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should get fav hero', (done) => {
    const id = 1011334;
    const store = mockStore(initialStore);
    const payload = favHero;
    const expectedActions = [
      { type: GET_HERO_REQUESTING },
      { type: GET_HERO_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters/${id}?&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.getHero(id, favorites))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should get comics', (done) => {
    const id = 1009351;
    const store = mockStore(initialStore);
    const payload = comics;
    const expectedActions = [
      { type: GET_COMICS_REQUESTING },
      { type: GET_COMICS_SUCCESS, payload }
    ];

    nock('http://localhost')
      .get(`/characters/${id}/comics?&orderBy=-onsaleDate&limit=10&ts=${KEYS.TS}&apikey=${KEYS.PUBLIC}&hash=${KEYS.HASH}`)
      .reply(HTTPStatus.OK, payload);

    store.dispatch(actions.getComics(id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
