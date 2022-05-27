import { createSlice } from '@reduxjs/toolkit';

const contactsReducer = createSlice({
    name: 'contactsReducer',
    initialState: [],
    reducers: {
        addContacts(state, action){
            state.push(action.payload);
        },
    },
});

export const { addContacts } = contactsReducer.actions;
export default contactsReducer.reducer;
