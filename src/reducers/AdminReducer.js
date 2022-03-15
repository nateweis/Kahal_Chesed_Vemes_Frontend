import {createSlice} from '@reduxjs/toolkit';

const undoSlide = [false, false, false, false, false, false]

export const AdminReducer = createSlice({
    name: 'adminState',
    initialState: {
        sidebar: [true, false, false, false, false, false],
        sidebarTitles: ["Link a", "Link b", "Link c", "Link d", "Link e", "Link f"]
    },
    reducers:{
        slideIn: (state, action)=> {state.sidebar[action.payload] = true},
        slideOut: (state) => {state.sidebar = undoSlide}
    }
})

export default AdminReducer.reducer

export const {slideIn, slideOut} = AdminReducer.actions