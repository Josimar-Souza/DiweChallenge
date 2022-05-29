import { createSlice } from '@reduxjs/toolkit';

const contactsReducer = createSlice({
	name: 'contactsReducer',
	initialState: { contacts: [] },
	reducers: {
		addContacts(state, action){
				state.contacts = action.payload;
		},
	},
});

export const { addContacts } = contactsReducer.actions;
export default contactsReducer.reducer;
