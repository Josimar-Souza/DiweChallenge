import React, { useEffect } from 'react';
import UserAPI from './api/userAPI';
import ContactsAPI from './api/contactsAPI';

const App = () => {
  useEffect(() => {
    const getContacts = async () => {
      const baseURL = 'https://contacts-api.prd.parceirodaconstrucao.com.br/';
      const userAPI = new UserAPI(baseURL, 10000);
      const token = await userAPI.login({ email: 'user@diwe.com.br', password: 'Mob20we23##' })
      const contactsAPI = new ContactsAPI(baseURL, 10000);
      contactsAPI.getAllContacs(token);
    }

    getContacts();
  }, [])

  return (
    <h1>Diwe Challange</h1>
  );
}

export default App;
