import React from 'react';
import ContactsTemplateStyle from './ContactsTemplateStyle';
import Header from '../../organisms/Header';

const ContactsTemplate = () => {
  return (
    <ContactsTemplateStyle>
      <Header backPath='/login' />
    </ContactsTemplateStyle>
  )
}

export default ContactsTemplate;
