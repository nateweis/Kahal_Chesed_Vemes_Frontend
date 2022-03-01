import {createSlice} from '@reduxjs/toolkit';

export const OverlayReducer = createSlice({
    name: 'overlay',
    initialState: {active:false},
    reducers:{
        overlayActive: (state, action)=> {state.active = action.payload},
    }
})

export default OverlayReducer.reducer

export const {overlayActive} = OverlayReducer.actions