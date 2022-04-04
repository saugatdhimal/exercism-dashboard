/* eslint-disable no-empty */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './Reducers';

function saveToSessionStorage(state: unknown) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (error) {}
}

function loadFromSessionStorage() {
  try {
    const serializedState = sessionStorage.getItem('state');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    return undefined;
  }
}

export const persistedState = loadFromSessionStorage();

export const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => saveToSessionStorage(store.getState()));
