import {combineReducers} from 'redux';

import counterReducer from './test';

const allReducers = combineReducers({
    counter : counterReducer
})

export default allReducers;