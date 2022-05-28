import React from 'react';
import styles from './ContactsListStyle';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import TableHeader from '../../atoms/TableHeader';
import ArrowDown from '../../Images/Icons/chevron-down.svg';

const ContactsList = () => {
  const {
    ContactsListStyle,
    InfoContainer,
    ContactsTable,
    TableHeaderRow,
    ArrowIcon,
  } = styles;

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
          backGroundColor='#4263EB'
        >
          Adicionar novo contato
        </Button>
      </InfoContainer>
      <ContactsTable>
        <TableHeaderRow>
          <TableHeader>#<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
          <TableHeader>Nome<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
          <TableHeader>Celular<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
          <TableHeader>Email<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
          <TableHeader>Ações</TableHeader>
        </TableHeaderRow>
      </ContactsTable>
    </ContactsListStyle>
  );
};

export default ContactsList;
