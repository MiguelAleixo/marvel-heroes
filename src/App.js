import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Home from './pages/Home'
import heroes from './pages/Home/reducer'
import logger from 'redux-logger'

const store = createStore(
  combineReducers({
    heroes
  }),
  applyMiddleware(logger, thunk)
)

function App() {
  return (
    <Provider store={store}>
        <Home />
    </Provider>
  );
}

export default App;
