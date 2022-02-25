import {createSlice} from '@reduxjs/toolkit';

export const PositionReducer = createSlice({
    name: 'navPosition',
    initialState: {navState: false},
    reducers:{navTop: (state, action)=> ({navState : action.payload})}
})

export default PositionReducer.reducer

export const {navTop} = PositionReducer.actions