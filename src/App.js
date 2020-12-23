import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Home from './views/Home';
import HeroPage from './views/HeroPage';
import heroes from './views/modules/home/reducer';
import hero from './views/modules/hero-page/reducer';
import favorite from './views/modules/favorite/reducer';

const store = createStore(
  combineReducers({
    heroes,
    hero,
    favorite
  }),
  applyMiddleware(logger, thunk),
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hero/:id" exact component={HeroPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
