import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ContactsListStyle';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import TableHeader from '../../atoms/TableHeader';
import ArrowDown from '../../Images/Icons/chevron-down.svg';
import TableRow from '../../molecules/TableRow';

const ContactsList = ({ contacts }) => {
	const navigate = useNavigate();

	const {
		ContactsListStyle,
		InfoContainer,
		ContactsTable,
		TableHeaderRow,
		ArrowIcon,
	} = styles;
	
	const onAddButtonClick = () => {
		navigate('/add-contact');
	};
	
	const onRemoveButtonClick = () => {
		console.log('Clicou pra remover!');
	}

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
					onClick={ onAddButtonClick }
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
				<tbody>
					{
						contacts.map(
							(contact, index) =>
								<TableRow
									key={ contact.id }
									index={ index }
									contact={ contact }
									onRemoveButtonClick={ onRemoveButtonClick }
								/>,
						)
					}
				</tbody>
			</ContactsTable>
		</ContactsListStyle>
	);
};

ContactsList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ContactsList;
