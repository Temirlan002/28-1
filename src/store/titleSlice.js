import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
    name: 'titleSlice',
    initialState: {
        title: 'old title',
        inputValue: ''
    },
    reducers: {
        changeTitle: (state, action) => {
            state.title = 'new title'
        },
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
        },
        changeInputAction: (state, action) => {
            state.inputValue = action.payload
        }

    }
})


export const { changeTitle, changeTitleWithParams, changeInputAction } = titleSlice.actions

export default titleSlice.reducer