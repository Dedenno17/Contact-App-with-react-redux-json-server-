import { createSlice } from "@reduxjs/toolkit";

const intialStateValue = '';

export const modalExistenceSlice = createSlice({
    name: 'modalExistence',
    initialState: {existence: intialStateValue},
    reducers: {
        setExistence: (state, actions) => {
            state.existence = actions.payload;
        }
    }
})

export const { setExistence } = modalExistenceSlice.actions;

export default modalExistenceSlice.reducer;