import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: localStorage.getItem('theme'),
}

const themeReducer = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme(state,action){
            state.theme = action.payload;
        },
    },
})

export const {setTheme} = themeReducer.actions;
export default themeReducer.reducer;