import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Home from './views/Home';
import HeroPage from './views/HeroPage';
import heroes from './views/Home/state/reducer';
import hero from './views/HeroPage/state/reducer';

const store = createStore(
  combineReducers({
    heroes,
    hero
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
