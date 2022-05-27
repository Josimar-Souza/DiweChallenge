import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactsReducer';

const store = configureStore({
    reducer: {
        contactsReducer,
    },
});

export default store;