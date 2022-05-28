import React from 'react';
import ContactsTemplateStyle from './ContactsTemplateStyle';
import Header from '../../organisms/Header';
import ContactsList from '../../organisms/ContactsList';

const ContactsTemplate = () => {
  return (
    <ContactsTemplateStyle>
      <Header backPath='/login' />
      <ContactsList />
    </ContactsTemplateStyle>
  )
}

export default ContactsTemplate;
