import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

////////// STORE -> GLOBALIZED STATE
import {createStore, applyMiddleware, compose} from 'redux'
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initState = {};
const middleware = [thunk]

const store = createStore(
  allReducers,
  initState,
  compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


