import { Action, AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { POSTS_ACTION_TYPES } from "../../constants/ActionTypes";

export interface ITheme  {
    theme: string | null;
}

const initialState:ITheme = {
    theme: localStorage.getItem('theme'),
}

const themeReducer = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme(state,action: PayloadAction<any>){
            state.theme = action.payload;
        },
    },
})

export const {setTheme} = themeReducer.actions;
export default themeReducer.reducer;