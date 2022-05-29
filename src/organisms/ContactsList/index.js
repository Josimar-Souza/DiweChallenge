import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsListStyle';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import TableHeader from '../../atoms/TableHeader';
import ArrowDown from '../../Images/Icons/chevron-down.svg';

const ContactsList = ({ contacts }) => {
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
				<thead>
					<TableHeaderRow>
						<TableHeader>#<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Nome<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Celular<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Email<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Ações</TableHeader>
					</TableHeaderRow>
				</thead>
			</ContactsTable>
		</ContactsListStyle>
	);
};

ContactsList.propTypes = {
	contacts: PropTypes.shape([]),
};

export default ContactsList;
