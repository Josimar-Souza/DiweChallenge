import React from 'react';
import styles from './ContactsListStyle';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

const ContactsList = () => {
  const { ContactsListStyle, InfoContainer } = styles;

  return (
    <ContactsListStyle>
      <InfoContainer>
        <Paragraph
          fontWeight='700'
        >
          Listagem de contatos
        </Paragraph>
        <Button
          width='30%'
        >
          Adicionar novo contato
        </Button>
      </InfoContainer>
    </ContactsListStyle>
  );
};

export default ContactsList;
