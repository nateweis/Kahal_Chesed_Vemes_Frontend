import {createSlice} from '@reduxjs/toolkit';

export const OverlayReducer = createSlice({
    name: 'overlay',
    initialState: {active:false, slide: false, title: "Title", data: {}},
    reducers:{
        overlayActive: (state, action)=> {state.active = action.payload; state.slide = action.payload},
        slideOut: (state) => {state.slide = false},
        updateData: (state, action) => {state.title = action.payload.title; state.data = action.payload.data},
    }
})

export default OverlayReducer.reducer

export const {overlayActive, slideOut, updateData} = OverlayReducer.actions