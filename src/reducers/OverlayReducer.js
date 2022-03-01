import {createSlice} from '@reduxjs/toolkit';

export const OverlayReducer = createSlice({
    name: 'overlay',
    initialState: {active:false, slide: false},
    reducers:{
        overlayActive: (state, action)=> {state.active = action.payload; state.slide = action.payload},
        slideOut: (state) => {state.slide = false},
    }
})

export default OverlayReducer.reducer

export const {overlayActive, slideOut} = OverlayReducer.actions