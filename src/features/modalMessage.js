import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = '';

export const modalMessageSlice = createSlice({
    name: 'modalMessage',
    initialState: {message: initialStateValue},
    reducers: {
        setMessage: (state, actions) => {
            state.message = actions.payload;
        }
    }
})

export const { setMessage } = modalMessageSlice.actions;

export default modalMessageSlice.reducer;