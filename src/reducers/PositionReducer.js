import {createSlice} from '@reduxjs/toolkit';

export const PositionReducer = createSlice({
    name: 'navPosition',
    initialState: false,
    reducers:{navTop: (state, action)=> ({state : action.payload})}
})

export default PositionReducer.reducer

export const {navTop} = PositionReducer.actions