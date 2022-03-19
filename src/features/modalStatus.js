import { createSlice } from "@reduxjs/toolkit";

const initialStatevalue = '';

export const modalStatusSlice = createSlice({
    name: 'modalStatus',
    initialState: {status: initialStatevalue},
    reducers: {
        setStatus: (state, actions) => {
            switch(actions.payload) {
                case 'danger':
                    actions.payload = 'red';
                    break;
                case 'warn':
                    actions.payload = 'orange';
                    break;
                case 'succes':
                    actions.payload = 'green';
                    break;
                default:
                    break;
            }

            state.status = actions.payload;
        } 
    }
})


export const { setStatus } = modalStatusSlice.actions;

export default modalStatusSlice.reducer;