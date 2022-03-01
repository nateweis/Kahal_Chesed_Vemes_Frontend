import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import App from './App';

import PositionReducer from './reducers/PositionReducer'
import OverlayReducer from './reducers/OverlayReducer';

const reducer = combineReducers({
    nav: PositionReducer,
    overlay: OverlayReducer
})


const store = configureStore({reducer})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

