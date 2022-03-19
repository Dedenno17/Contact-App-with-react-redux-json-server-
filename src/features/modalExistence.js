import { createSlice } from "@reduxjs/toolkit";

const intialStateValue = false;

export const modalExistenceSlice = createSlice({
    name: 'modalExistence',
    initialState: {existence: intialStateValue},
    reducers: {
        setExistence: (state, actions) => {
            if( actions.payload === false ) {
                state.existence = '';
            }else{
                state.existence = 'show';
            }
        }
    }
})

export const { setExistence } = modalExistenceSlice.actions;

export default modalExistenceSlice.reducer;