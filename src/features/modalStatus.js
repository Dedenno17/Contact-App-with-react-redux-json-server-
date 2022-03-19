import { createSlice } from "@reduxjs/toolkit";

const initialStatevalue = '';

export const modalStatusSlice = createSlice({
    name: 'modalStatus',
    initialState: {status: initialStatevalue},
    reducers: {
        setStatus: (state, actions) => {
            switch(actions.payload) {
                case 'danger':
                    actions.payload = '#F65A3B';
                    break;
                case 'warn':
                    actions.payload = '#F9BB07';
                    break;
                case 'succes':
                    actions.payload = '#00A00A';
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