import React from 'react';
import styles from './ContactsTemplateStyle';
import Header from '../../organisms/Header';
import ContactsList from '../../organisms/ContactsList';

const ContactsTemplate = () => {
  const { ContactsListContainer, ContactsTemplateStyle } = styles;
  return (
    <ContactsTemplateStyle>
      <Header backPath='/login' />
      <ContactsListContainer>
        <ContactsList />
      </ContactsListContainer>
    </ContactsTemplateStyle>
  )
}

export default ContactsTemplate;
