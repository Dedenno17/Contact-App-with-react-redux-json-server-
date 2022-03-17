import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = '';

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: initialStateValue,
    },
    reducers: {
        setContacts: (state, actions) => {
            state.contacts = actions.payload;
        },
    }
});

export const { setContacts } = contactSlice.actions;

export default contactSlice.reducer;

