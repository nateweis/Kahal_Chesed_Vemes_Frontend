import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import App from './App';

import PositionReducer from './reducers/PositionReducer';
import OverlayReducer from './reducers/OverlayReducer';
import AdminReducer from './reducers/AdminReducer';

const reducer = combineReducers({
    nav: PositionReducer,
    overlay: OverlayReducer,
    admin: AdminReducer
})


const store = configureStore({reducer})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

