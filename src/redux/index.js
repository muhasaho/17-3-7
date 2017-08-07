import { createStore, combineReducers } from 'redux'
import app from './app'

const reducers = combineReducers({app})

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

